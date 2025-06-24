import React from 'react';
import styles from './styles.module.css';

const PDFViewer = ({ src, title, height = "600px", showDownload = true }) => {
  return (
    <div className={styles.pdfViewer}>
      <iframe 
        src={src} 
        width="100%" 
        height={height} 
        title={title || "PDF Document"}
        className={styles.pdfFrame}
      >
        <p>Your browser doesn't support PDF embedding. <a href={src}>Click here to view the PDF</a>.</p>
      </iframe>
      {showDownload && (
        <div className={styles.downloadSection}>
          <a href={src} download className={styles.downloadButton}>
            📥 Download PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default PDFViewer; 