import React from 'react';

export default function DocsLinkCard({items, colSize}) {
    let colClasses = "lg:tw-grid-cols-2 tw-gap-4 xs:tw-grid-cols-1 ";
    if (colSize === "lg") {
        colClasses = "lg:tw-grid-cols-4 tw-gap-2 xs:tw-grid-cols-2"
    }else if (colSize === "md") {
        colClasses = "lg:tw-grid-cols-3 tw-gap-2 xs:tw-grid-cols-1 md:tw-grid-cols-2"
    }
    return (
        <div className={`tw-grid ${colClasses}`}>
            {items.map((item) => (
                <div
                    key={item.title}
                    className="tw-relative tw-flex tw-items-center tw-space-x-3 tw-rounded-lg tw-border tw-border-solid tw-border-primary-500 tw-bg-white tw-px-6 tw-py-5 tw-shadow-sm focus-within:tw-ring-2 focus-within:tw-ring-indigo-500 focus-within:tw-ring-offset-2 hover:tw-border-primary-600 hover:tw-shadow-md"
                >
                    {item.icon &&
                        <div className="tw-flex-shrink-0">
                            <img width="100%" className="tw-max-h-10 tw-max-w-10" src={item.icon} alt=""/>
                        </div>
                    }
                    <div className="tw-min-w-0 tw-flex-1">
                        <a href={item.url} className="focus:tw-outline-none hover:tw-no-underline">
                            <span className="tw-absolute tw-inset-0" aria-hidden="true"/>
                            <div className="tw-text-md tw-font-medium tw-text-gray-900 tw-break-keep">{item.title}</div>
                            {item.description &&
                                <div className="tw-text-sm tw-text-gray-500">{item.description}</div>
                            }
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}
