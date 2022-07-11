import React from 'react'
import "./resume.css"
import Resume from "../../images/Resume.png"
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { jsPDF } from "jspdf";


const resume = () => {

  const handleClick = () => {
    console.log("working")
    const doc = new jsPDF() 
    const height = doc.internal.pageSize.getHeight()
    const width = doc.internal.pageSize.getWidth()
    doc.addImage(Resume, 'PNG', 0, 0, width, height)
    doc.save("Resume.pdf")
  }


  return (
    <div className='resume' id='resume'>
      <h1 className='r-heading'>Resume</h1>
      <div className='r-container'>
        <img src={Resume} className="r-resumeImg"/>
        <div className='r-downloadContainer' onClick={handleClick}>
          <DownloadIcon className='r-icon'/>
          <span className='r-span'>Download</span>
          <PictureAsPdfIcon className='r-icon'/>
        </div>
      </div>
      
    </div>
  )
}

export default resume