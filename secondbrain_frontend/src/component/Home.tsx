import { useEffect, useState } from "react"
import { Modal } from "./Modal"
import { useBrain } from "../hooks/useBrain"
import { Header } from "./Header";
import { CardsHolder } from "./CardsHolder";

export const Home = () => {
    const { getBrainData, brains } = useBrain()
    const [open, setOpen] = useState(false)
    const [isForm, setIsForm] = useState(false)
    const [title, setTitle] = useState('')


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
            <Header shareLink={shareLink} addContent={addContent} />
            <Modal open={open} setOpen={setOpen} title={title} form={isForm} />
            <CardsHolder brains={brains} />

        </>
    )
}