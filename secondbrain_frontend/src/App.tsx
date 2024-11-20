import './App.css'
import Button from './component/ui/Button'
import { FiShare2 } from 'react-icons/fi';
import { FaPlus } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5"
import { Card } from './component/ui/Card';
import { Modal } from './component/Modal';
import { useEffect, useState } from 'react';
import { useBrain } from './hooks/useBrain';

function App() {
  const { getBrainData, brains } = useBrain()
  const [open, setOpen] = useState(false)
  const [isForm, setIsForm] = useState(false)
  const [title, setTitle] = useState('')

  console.log(brains);

  const shareLink = () => {
    setIsForm((prev) => !prev)
    setOpen((prev) => !prev)
    setTitle("Share Your Second Brain")

  }
  const addContent = () => {
    setIsForm((prev) => !prev)
    setOpen((prev) => !prev);
    setTitle("Save what ever you want to in you Second brain")
  }
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyRGV0YWlsc2ZvdW5kIjp7Il9pZCI6IjY3M2M1ZTk3Y2Q2NDgwZGVmMWI0NzM0MyIsInVzZXJuYW1lIjoiaGFkZGVzcnNoaCIsImVtYWlsIjoiaHNzZGRkZHdoQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJC5VL3lGWEI0RDJJV3hmTktPMkpxMC5CY3pBd1dMRERCLlNla3dTUEZVTlVISVI2bld4S3lhIiwiX192IjowfSwiaWF0IjoxNzMyMDE4MzczfQ.n2Enl6Er4MJTLOX9aE2qKBI4HyNy4FpLDx6ruh_Cobk"
  useEffect(() => {
    getBrainData(token);
  }, [])

  return (
    <>
      <br />
      <br />
      <div className='flex justify-center  space-x-8'>
        <Button placeholder={"Share Brain"} Icon={<FiShare2 />} onClick={shareLink} variant={"primary"} />
        <Button placeholder={"Add Content"} Icon={<FaPlus />} onClick={addContent} variant={"secondary"} />
      </div>
      <Modal open={open} setOpen={setOpen} title={title} form={isForm} />


      {
        brains?.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 space-y-8'>
            {brains.map((brain ) => (              
              <Card key={brain.id} Icon={<FiShare2 />}  cardIndex ={brain._id} tags={brain.tags}   text={brain.title} />
            ))}
          </div>
        ) : (
          <p>There are no content please add the contents</p>
        )
      }

    </>
  )
}

export default App
