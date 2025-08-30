'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SpinnerDemo from './spinner-01'

type Template = {
  id: number
  title: string
  featured_image: string
  custom_fields: {
    _template_paid?: string[]
    _template_price?: string[]
    _template_preview?: string[]
    _template_link?: string[]
  }
}

type ButtonsEvents = {
  labelOne: string
  labelTwo: string
  onClickOne?: () => void
  onClickTwo?: () => void
}

const Filters: React.FC = () => {
  const [postdata, setPostData] = useState<Template[]>([])
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [pageLoaded, setPageLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const apiUrl = 'https://webcomponents.blog/wp-json/myplugin/v1/templates'

  useEffect(() => {
    let isMounted = true

    const fetchPosts = async () => {
      try {
        const response = await axios.get(apiUrl)
        console.log('results', response)
        if (isMounted) {
          setPostData(response.data)
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchPosts()
    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    const handleLoad = () => setPageLoaded(true)
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  const filters = [
    { label: "Hero's", apiCall: `${apiUrl}?category=hero` },
    { label: 'Footers', apiCall: `${apiUrl}?category=footer` },
    { label: 'FAQs', apiCall: `${apiUrl}?category=faqs` },
    { label: 'ChatBots', apiCall: `${apiUrl}?category=chatbot` },
    { label: "Cta's", apiCall: `${apiUrl}?category=ctas` },
    { label: 'Dashboards', apiCall: `${apiUrl}?category=dashboards` },
    { label: 'Pricing', apiCall: `${apiUrl}?category=pricing` },
  ]

  const handleFilterClick = async (url: string) => {
    setSelectedCategory(url)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setTemplates(data)
    } catch (error) {
      console.error('Error fetching filtered templates:', error)
    }
  }

  const activeData = selectedCategory ? templates : postdata

  return (
    <section className="mt-10 w-full rounded-[32px] bg-[#000] p-[24px] md:rounded-[46px] md:p-[32px]">
      <h2 className="mb-5 text-left text-2xl font-bold text-gray-200 md:text-4xl dark:text-white">
        Choose Components
      </h2>

      <div className="mb-6 flex flex-row gap-2 overflow-x-auto">
        {filters.map((filter) => {
          const isActive = selectedCategory === filter.apiCall
          return (
            <button
              key={filter.label}
              onClick={() => {
                if (isActive) {
                  setSelectedCategory(null)
                  setTemplates([])
                } else {
                  handleFilterClick(filter.apiCall)
                }
              }}
              className={`flex cursor-pointer items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium ${
                isActive
                  ? 'border-gray-200 bg-[#f6f7f8] text-black'
                  : 'border-gray-200 bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {filter.label}
              {isActive && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path stroke="currentColor" d="M3 3l10 10M13 3L3 13" />
                </svg>
              )}
            </button>
          )
        })}
      </div>

      {loading ? (
        <SpinnerDemo />
      ) : (
        <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activeData.map((item) => (
            <a
              key={item.id}
              href={item.custom_fields._template_link?.[0] || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="card rounded-4xl border-1 border-[#E2E8F0] bg-[#F8FAFC] p-4 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-zinc-50"
            >
              <div className="card__content relative flex-wrap gap-2">
                <div className="mb-3 w-full overflow-hidden rounded-3xl">
                  <div className="card__image h-full w-full">
                    {pageLoaded && (
                      <Image
                        src={item.featured_image}
                        className="cover h-full w-full"
                        width={400}
                        height={300}
                        alt="Card preview"
                      />
                    )}
                  </div>
                </div>
                <div className="flex w-full flex-col justify-between p-2">
                  {item.custom_fields._template_paid?.[0] === 'paid' && (
                    <div className="mb-2 w-fit rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-1 text-sm text-[#4F46E5]">
                      Paid
                    </div>
                  )}
                  <p className="mb-5 text-left text-xl leading-relaxed font-extrabold text-[#1E293B] dark:text-white">
                    {item.title}
                  </p>
                  <ActionButtons
                    labelOne={
                      item.custom_fields._template_paid?.[0] === 'paid'
                        ? `₹${item.custom_fields._template_price?.[0] ?? '0'}`
                        : 'Free'
                    }
                    labelTwo="Preview"
                    onClickTwo={() =>
                      window.open(
                        item.custom_fields._template_preview?.[0],
                        '_blank',
                      )
                    }
                  />
                </div>
              </div>
            </a>
          ))}
          {selectedCategory && templates.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No templates found for this category.
            </p>
          )}
        </section>
      )}
    </section>
  )
}

const ActionButtons: React.FC<ButtonsEvents> = ({
  labelOne,
  labelTwo,
  onClickOne,
  onClickTwo,
}) => (
  <div className="flex w-full gap-2">
    <button
      type="button"
      onClick={onClickOne}
      className="w-full cursor-pointer rounded-2xl border border-transparent bg-[#8366ff] px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
    >
      {labelOne}
    </button>

    <button
      type="button"
      onClick={onClickTwo}
      className="w-full cursor-pointer rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50"
    >
      {labelTwo}
    </button>
  </div>
)

export default Filters
