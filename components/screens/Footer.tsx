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
        <footer className="bg-[#f5f5f5] transition-colors duration-500 group-hover:bg-[#fceef9] px-4 sm:px-6 md:px-10 lg:px-20 py-20 text-black">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
                {/* Rotated B Icon */}
                <div>
                    <p className="text-5xl font-bold transform rotate-[45deg] hover:rotate-0 transition-transform duration-500 cursor-pointer">
                        B
                    </p>
                </div>

                {/* Description */}
                <div className="text-3xl font-semibold text-center md:text-left max-w-xl">
                    <p>I’m Bryn — a freelance product and website designer based in Copenhagen</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
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
                        <p className="text-gray-500 font-semibold mb-3">Webflow templates</p>
                        {[
                            { name: 'Lucide', img: '/images/icons/lucide.jpg' },
                            { name: 'Monograph', img: '/images/icons/monograph.jpg' },
                            { name: 'Landon', img: '/images/icons/landon.jpg' },
                            { name: 'Fern', img: '/images/icons/fern.jpg' },
                            { name: 'Torch', img: '/images/icons/torch.jpg' },
                        ].map((item) => (
                            <div key={item.name} className="flex text-lg font-medium items-center gap-2 mt-3">
                                <img src={item.img} alt={item.name} className="w-8 h-8 rounded-sm" />
                                {renderTextWithWave(item.name)}
                            </div>
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div>
                        <p className="text-gray-500 font-semibold mb-3">Framer templates</p>
                        {[
                            { name: 'Last Studio', img: '/images/icons/last-studio.jpg' },
                            { name: 'Unlimited Access', img: '/images/icons/unlimited access.png' },
                            { name: 'Collective', img: '/images/icons/collective.jpg' },
                            { name: 'Narrate', img: '/images/icons/narrate.jpg' },
                            { name: 'Assemble', img: '/images/icons/assemble.jpg' },
                        ].map((item) => (
                            <div key={item.name} className="flex text-lg font-medium items-center gap-2 mt-3">
                                <img src={item.img} alt={item.name} className="w-8 h-8 rounded-sm" />
                                {renderTextWithWave(item.name)}
                            </div>
                        ))}
                        <div className="flex text-lg font-medium items-center gap-2 mt-10">
                            <img src="/images/icons/become-affilate.svg" alt="affiliate" className="w-8 h-8 rounded-sm" />
                            {renderTextWithWave('Become an affiliate')}
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <p className="text-gray-500 font-semibold mb-3">Use my portfolio</p>
                        {[
                            { name: 'Clone in Webflow', img: '/images/icons/clone.svg' },
                            { name: 'Remix in Framer', img: '/images/icons/remix.svg' },
                        ].map((item) => (
                            <div key={item.name} className="flex text-lg font-medium items-center gap-2 mt-3">
                                <img src={item.img} alt={item.name} className="w-8 h-8 rounded-sm" />
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
                        <p className="text-gray-500 font-semibold mb-3">Other</p>
                        {['Tools I use', 'Built in Webflow'].map((item) => (
                            <div key={item} className="mt-1 text-lg font-medium">{renderTextWithWave(item)}</div>
                        ))}
                        {/* Footer Note */}
                        <div className="text-m text-gray-600 mt-10">
                            ©{currentYear} to ∞ Bryn Taylor
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
