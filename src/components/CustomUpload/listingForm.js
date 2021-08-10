import React, {useState, useEffect, useCallback} from 'react'
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isDragActive) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

function Dropzone(props) {

    const onDrop = useCallback(acceptedFiles => {
        props.setImages(acceptedFiles)
      }, [props])

    const {
      acceptedFiles,
      fileRejections,
      getRootProps,
      getInputProps
    } = useDropzone({ onDrop, 
        accept: 'image/jpeg, image/png',  
        maxFiles:5
    });

  
    const acceptedFileItems = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    const fileRejectionItems = fileRejections.map(({ file, errors  }) => { 
     return (
       <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
              {errors.map(e => <li key={e.code}>{e.message}</li>)}
           </ul>
  
       </li>
     ) 
    });
    
  
    return (
      <section className="container">
        <Container {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <em>(5 files maximum of type, only *.jpeg and *.png images will be accepted)</em>
        </Container>
        <aside>
          <h4>Accepted files</h4>
          <ul>{acceptedFileItems}</ul>
          <h4>Rejected files</h4>
          <ul>{fileRejectionItems}</ul>
        </aside>
      </section>
    );
  }
  

export default Dropzone;