import React from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming inECMAScript (JavaScript/JS) ans its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question."
    }, {
        id: 2,
        tagName: "python",
        tagDesc: "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand and use, and enforces a clean and uniform syntax."
    }, {
        id: 3,
        tagName: "c#",
        tagDesc: "C# is a high-level, statically typed, multi-paradigm programming language developed by Microsoft."
    }, {
        id: 4,
        tagName: "java",
        tagDesc: "Jva is a high-level object-oriented programming language. Use this tag when you are having problems using or understanding the language itself."
    }, {
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development."
    }, {
        id: 6,
        tagName: "html",
        tagDesc: "HTML (Hyper Text Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."
    }, {
        id: 7,
        tagName: "android",
        tagDesc: "Android is a Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT)."
    }, {
        id: 8,
        tagName: "css",
        tagDesc: "CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts, and animations."
    }, {
        id: 9,
        tagName: "reactjs",
        tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be efficient and flexible."
    }, {
        id: 10,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library."
    }, {
        id: 11,
        tagName: "swift",
        tagDesc: "Swift is a general-purpose programming language developed by Apple Inc first released in 2014 for its platforms and Linux."
    }, {
        id: 12,
        tagName: "ios",
        tagDesc: "iOS is the mobile operating system running on the Apple iPhone, iPod touch, and iPad. Use this tag [ios] for questions related to programming on the iOS platform. Use the related tags [objective-c] and [swift] for issues specific to those programming languages."
    }]

  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags make it easier for others to find and answer your question.</p>
            <div className='tags-list-container'>
                {
                    tagsList.map((tag) => (
                        <TagsList tag ={tag} key={tagsList.id}/>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Tags
