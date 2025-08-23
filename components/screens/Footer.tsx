'use client';
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const renderTextWithWave = (text: string) => (
        <span className="inline-block group hover:text-gray-600 cursor-pointer">
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className="inline-block transition-transform duration-300 group-hover:text-gray-600"
                    style={{ transitionDelay: `${i * 50}ms` }}
                >
                    <span className="inline-block group-hover:transform group-hover:-skew-y-[8deg]">
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                </span>
            ))}
        </span>
    );

    return (
        <footer className="bg-[#f5f5f5] transition-colors duration-500 group-hover:bg-[#fceef9] px-4 sm:px-6 md:px-10 lg:px-20 py-10 text-black">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
                {/* Rotated G Icon */}
                {/* Rotated G Icon */}
                <div className="w-full md:w-auto flex justify-center md:justify-start">
                    <p className="text-5xl font-bold transform rotate-[45deg] hover:rotate-0 transition-transform duration-500 cursor-pointer">
                        G
                    </p>
                </div>


                {/* Description */}
                <div className="text-3xl font-semibold text-center md:text-left max-w-xl">
                    <p>I’m Ganesh — a freelance web developer and mobile application developer based in Hyderabad</p>
                </div>

                {/* Buttons */}
                {/* Buttons */}
                <div className="w-full md:w-auto flex justify-center md:justify-end gap-3">
                    <button className="px-4 py-3 bg-white border rounded-lg font-medium hover:-translate-y-1 transition">
                        Copy email
                    </button>
                    <button className="px-4 py-3 bg-black text-white rounded-lg font-medium hover:-translate-y-1 transition">
                        Email me →
                    </button>
                </div>

            </div><br />

            {/* Divider */}
            <div className="h-[1px] w-full bg-gray-300 mb-10" /><br />

            {/* Grid Section Split into Two Rows */}
            <div className="space-y-12">
                {/* Row 1 - First 3 Columns with Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:ml-[16.3%]">
                    {/* Column 1 */}
                    <div>
                        <p className="text-gray-500 font-semibold mb-3">Wordpress</p>
                        {[
                            { name: 'The Fallen', img: '/images/ventures/the fallen.png' },
                            { name: 'Capital Flasher', img: '/images/ventures/capital flasher.png' },
                            { name: 'Money Printers', img: '/images/ventures/money printers.png' },
                            { name: 'Flash Zone', img: '/images/ventures/flash zone.png' },
                            { name: 'Simula', img: '/images/ventures/simula.png' },
                        ].map((item) => (
                            <div key={item.name} className="flex text-lg font-medium items-center gap-2 mt-3">
                                <img src={item.img} alt={item.name} className="w-8 h-8 object-cover rounded-sm" />
                                {renderTextWithWave(item.name)}
                            </div>
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div>
                        <p className="text-gray-500 font-semibold mb-3">Dashboards</p>
                        {[
                            { name: 'Web Dashboard', img: '/images/work/dashboard.webp' },
                            { name: 'Free Components', img: '/images/work/freecomponents.jpg' },
                            { name: 'GPT Template', img: 'https://webcomponents.blog/wp-content/uploads/2025/07/Download-This-Free-PersonalGPT-Chat-UI-%E2%80%93-Open-Source-Next.js-Template.webp' },
                            //{ name: 'Narrate', img: '/images/icons/narrate.jpg' },
                            //{ name: 'Assemble', img: '/images/icons/assemble.jpg' },
                        ].map((item) => (
                            <div key={item.name} className="flex text-lg font-medium items-center gap-2 mt-3">
                                <img src={item.img} alt={item.name} className="w-8 h-8 object-cover  rounded-sm" />
                                {renderTextWithWave(item.name)}
                            </div>
                        ))}
                        {/* <div className="flex text-lg font-medium items-center gap-2 mt-10">
                            <img src="/images/icons/become-affilate.svg" alt="affiliate" className="w-8 h-8 rounded-sm" />
                            {renderTextWithWave('Become an affiliate')}
                        </div> */}
                    </div>

                    {/* Column 3 */}
                    <div>
                        <p className="text-gray-500 font-semibold mb-3">Mobile Apps</p>
                        {[
                            { name: 'Good Garms', img: '/images/ventures/good-garms.jpg' },
                            { name: 'A1', img: '/images/ventures/A1.png' },
                        ].map((item) => (
                            <div key={item.name} className="flex text-lg font-medium items-center gap-2 mt-3">
                                <img src={item.img} alt={item.name} className="w-8 h-8 object-cover rounded-sm" />
                                {renderTextWithWave(item.name)}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:ml-[16.3%]">
                    {/* Column 4 */}
                    <div>
                        <p className="text-gray-500 font-semibold mb-3">Ventures</p>
                        {['Freelance Things', 'Good Garms', 'A1'].map((item) => (
                            <div key={item} className="mt-1 text-lg font-medium">{renderTextWithWave(item)}</div>
                        ))}
                    </div>

                    {/* Column 5 */}
                    <div>
                        <p className="text-gray-500 font-semibold mb-3">Social</p>
                        {['Twitter (X)', 'Instagram', 'LinkedIn', 'Webflow'].map((item) => (
                            <div key={item} className="mt-1 text-lg font-medium">{renderTextWithWave(item)}</div>
                        ))}
                    </div>

                    {/* Column 6 */}
                    <div>
                        <p className="text-gray-500 font-semibold">Other</p>
                        {['Tools I use', 'Built in Webflow'].map((item) => (
                            <div key={item} className="mt-1 text-lg font-medium">{renderTextWithWave(item)}</div>
                        ))}
                        {/* Footer Note */}
                        <div className="text-m text-gray-600 mt-10">
                            ©{currentYear} to ∞ Ganesh
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
