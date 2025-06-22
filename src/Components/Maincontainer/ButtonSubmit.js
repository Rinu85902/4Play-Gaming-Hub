export default function ButtonSubmit({onClick, label, classsubmit}){    
    return(
        <>
            <button className={classsubmit} onClick={onClick}>{label}</button>
        </>
    )

}