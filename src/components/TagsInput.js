import React, { useState } from 'react'

const TagsInput = () => {

    const [tags, setTags] = useState([])

    function handleKeyDown(e) {
        console.log("o", e.target.value)
        if (e.key !== 'Enter') return;
        const value = e.target.value;
        if (!value.trim()) return;
        setTags([...tags, value])
        console.log("t", tags)
    }

    return (
        <div className="tags-input-container">
            {/* <div className="tag-item">
                <span className="text">hello</span>
                <span className="close">&times;</span>
            </div>
            <div className="tag-item">
                <span className="text">hello</span>
                <span className="close">&times;</span>
            </div> */}
            <div className="tag-item">
                <span className="text">hello</span>
                <span className="close">&times;</span>
            </div>
            {
                tags.map((tag, index) => {
                    <div className="tag-item">
                        <span className="text">{tag}</span>
                        <span className="close">&times;</span>
                    </div>
                })
            }

            <input type="text" onKeyDown={handleKeyDown} placeholder="type something" className="tags-input" />
        </div>
    )
}

export default TagsInput;
