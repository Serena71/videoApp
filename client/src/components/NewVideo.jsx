import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// firebase storage to upload files
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useEffect } from 'react';
import ButtonMui from '@mui/material/Button';
import axios from 'axios';

const Form = styled.form`
  width: calc(100%-40px);
  padding: 20px;
  height: 650px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const H1 = styled.h1`
  font-size: 24px;
  align-self: center;
`;

const Close = styled.div`
  align-self: flex-end;
  cursor: pointer;
`;

const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  z-index: 999;
`;

const Description = styled.textarea`
  margin: 10px 0px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  padding: 10px;
  border-radius: 5px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const Button = styled(ButtonMui)`
  && {
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    &:hover {
      background-color: ${({ theme }) => theme.soft};
    }
  }
`;

const NewVideo = ({ open, setOpen }) => {
  const [files, setFiles] = useState({});
  const [percentages, setPercentages] = useState({});
  const [inputs, setInputs] = useState({});
  const [task, setTask] = useState({});

  const navigate = useNavigate();

  const updateInput = (e) => {
    if (e.target.name === 'tags') {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value.split(',') };
      });
    } else {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
  };
  // const manageFileUpload = (uploadTask, operation) => {
  //   switch (operation) {
  //     case 'pause':
  //       uploadTask?.pause();
  //       break;
  //     case 'resume':
  //       uploadTask?.resume();
  //       break;
  //     case 'cancel':
  //       uploadTask?.cancel();
  //       break;
  //   }
  // };
  const uploadFile = (file, fileType) => {
    // Create a root reference
    const storage = getStorage();
    // Create a unique filename for each file
    const fileName = new Date().getTime() + file.name;
    // Create a reference to file
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    setTask(uploadTask);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercentages({ ...percentages, [fileType]: Math.round(progress) });
        console.log(snapshot.state);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            console.log('canceled?');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log('File available at', downloadURL);
          setInputs((prev) => {
            return { ...prev, [fileType]: downloadURL };
          });
        });
      }
    );
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const res = await axios.post('/videos', inputs);
    setOpen(false);
    res.status === 200 && navigate(`/video/${res._id}`);
  };

  useEffect(() => {
    files.image && uploadFile(files.image, 'imageUrl');
  }, [files.image]);

  useEffect(() => {
    files.video && uploadFile(files.video, 'videoUrl');
  }, [files.video]);

  return (
    <Dialog open={open} fullWidth={true}>
      <Form>
        <Close onClick={() => setOpen(false)}>X</Close>
        <H1>Upload a New Video</H1>
        <Label>Upload Video</Label>
        {percentages.videoUrl > 0 ? (
          `Uploading: ${percentages.videoUrl}%`
        ) : (
          <Input type="file" accept="video/*" onChange={(e) => setFiles({ ...files, video: e.target.files[0] })} />
        )}
        {/* <div>
          <Button
            onClick={() => {
              manageFileUpload(task, 'pause');
            }}
          >
            Pause/Resume
          </Button>
          <Button
            onClick={() => {
              manageFileUpload(task, 'cancel');
            }}
          >
            Cancel
          </Button>
        </div> */}

        <Input type="text" placeholder="Video Title" name="title" onChange={updateInput} />

        <Description rows={10} placeholder="Description" name="description" onChange={updateInput} />
        <Input type="text" placeholder="Separate tags with commas." name="tags" onChange={updateInput} />
        <Label>Upload Image</Label>
        {percentages.imageUrl > 0 ? (
          `Uploading: ${percentages.imageUrl}%`
        ) : (
          <Input type="file" accept="image/*" onChange={(e) => setFiles({ ...files, image: e.target.files[0] })} />
        )}
        <Button onClick={handleUpload}>Upload</Button>
      </Form>
    </Dialog>
  );
};

export default NewVideo;
