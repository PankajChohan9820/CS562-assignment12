import React from "react";


export const Filter=({filter, setFilter})=>{
    return <input value={filter} onChange={e=>setFilter(e.target.value)} style={{marginBottom:"20px", height: "100%", width: "20%", placeholder:"Search.."}}></input>
}