import React from 'react';

export default function CardList(props) {
    return (
        <div role="list" className="tw-grid tw-gap-6 tw-grid-cols-2">
        {items.map((item) => (
                <div key={item.label}
            className="tw-col-span-1 tw-flex tw-flex-col tw-divide-y tw-divide-gray-200 tw-rounded-2xl tw-bg-white tw-text-center tw-border-2 tw-border-primary-400 tw-border-solid hover:tw-border-primary-600 hover:tw-shadow-md">
            {item.items && item.items[0] && item.items[0].href &&
                <a href={item.items[0].href} className="hover:tw-no-underline hover:tw-font-extrabold">
                <div className="tw-flex tw-flex-1 tw-flex-col tw-p-8">
                <div
                    className=" tw-flex tw-max-h-16 tw-h-16 tw-w-full text-center tw-justify-center ">
                    {item.customProps && item.customProps.image &&
                        <img className="justify-self-center tw-max-h-16"
                        src={item.customProps.image}
                        alt=""/>
                    }
                    </div>
                    <h3 className="tw-mt-6 tw-text-lg tw-font-semibold tw-text-gray-black">{item.label}</h3>
                </div>
                </a>
            }
            </div>
))}
    </div>
    );
}