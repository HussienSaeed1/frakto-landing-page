'use client';
import { useState, useRef } from 'react';
import { IoAddOutline } from 'react-icons/io5';

export default function FAQAccordion({ faqs }) {
  const [expandedPanels, setExpandedPanels] = useState({});
  const contentRefs = useRef({});

  const togglePanel = (id) => {
    setExpandedPanels((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mt-12 lg:max-w-container 3xl:w-[80%]">
      {faqs.map((faq, index) => {
        const panelId = `faq-${index}`;
        return (
          <div
            key={panelId}
            className="mb-2">
            <div
              className={`flex items-center justify-between p-4 cursor-pointer text-textColor rounded-t-md ${
                expandedPanels[panelId]
                  ? ''
                  : 'border-b-[1px] border-borderColorDefault'
              }`}
              onClick={() => togglePanel(panelId)}>
              <h3 className="text-[1.175rem] font-medium">{faq.title}</h3>
              <span
                className={`text-xl transition-transform duration-500 me-0 ${
                  expandedPanels[panelId] ? 'rotate-45 ' : ''
                }`}>
                <IoAddOutline className="w-8 h-8 text-colorsTextBody" />
              </span>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden border-b-1 border-borderColorDefault ${
                expandedPanels[panelId] ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                maxHeight: expandedPanels[panelId]
                  ? `${contentRefs.current[panelId]?.scrollHeight}px`
                  : '0px',
              }}>
              <div
                ref={(el) => (contentRefs.current[panelId] = el)}
                className="p-4">
                <p className="text-textColor">{faq.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
