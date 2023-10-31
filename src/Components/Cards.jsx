import React from 'react';
export const NewsCard = ({ newsItem }) => {
    console.log(newsItem)
    return (
        <a
            className="no-underline:none"
            href={newsItem.url}
            target="_blank"
            rel="noopener noreferrer"

        >
            <div className="max-w-xs rounded overflow-hidden shadow-lg m-4" >
                <img
                    className="w-full"
                    src={newsItem.multimedia[0]?.url}
                    alt={newsItem.title}
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{newsItem.title}</div>
                    <p className="text-gray-700 text-base">{newsItem.abstract}</p>
                </div>
                <div className="px-6 py-4">
                    <a
                        className="text-blue-500 hover:underline"
                        href={newsItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read more
                    </a>
                </div>
            </div></a>
    )
}
