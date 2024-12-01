"use client";

import DeclensionTable from "./components/DeclensionTable/DeclensionTable";


export default function Home() {
    return (
        <div className="grid grid-rows-auto items-center justify-items-center overflow-auto min-h-screen">
            <DeclensionTable 
                enabledDeclensions={["secondMas", "firstFem", "secondNeut"]} 
                onDeclensionPressed={ (data) => {console.log(data)} }    
            />
        </div>
    );
}
