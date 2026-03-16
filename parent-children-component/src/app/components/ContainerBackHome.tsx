"use client"
import "./ContainerBackHome.css"

type Props = {
    children: React.ReactNode;
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContainerBackHome = ({children, modal, setModal}: Props) => {

    return (
        <div
            className="container"
            onClick={(e)=>{ 
                setModal(false);
            }}
        >
            <div className="innerContainer">
                {children}
            </div>
        </div>
    )
}

export default ContainerBackHome;