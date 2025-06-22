export default function InputComponent({value,onChange,placeholder, type, nameclass}){
    const handleInputChange = (e)=>{
        onChange(e.target.value)
    }
    return(
        <>
            <input value={value} className={nameclass} onChange={handleInputChange} placeholder={placeholder} type={type}/>
        </>
    )
}