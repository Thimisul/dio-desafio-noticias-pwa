import React, { memo } from 'react'
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";

const navigatorHasShare = navigator.share
const URL = 'http://localhost:3001/'


function Actions({ post, subject }) {
  const { id, title } = post

  const shareInfo = () => {
    navigator.share({
      url: URL,
      text: title,
      title: `PWA News'- ${subject}`,
    })
  }

  const copyInfo = () => {
    navigator.clipboard.writeText(`${title} - "Learn more about in" ${URL}/${subject}/${id}`)

  }

  const renderActions = () => {
    const action = navigatorHasShare ? shareInfo : copyInfo

    const icon = navigatorHasShare ? <AiOutlineShareAlt /> : <AiOutlineCopy />

    return <h1 className="share-icon" onClick={action}> {icon}</h1>
  }

  return (
    <div className="share">
      {renderActions()}
    </div>
  )

}

export default memo(Actions)