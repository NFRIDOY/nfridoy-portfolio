

export default function NFRidoy({ light }) {
    console.log(light)
    if (light == "ture") {
        return (
            <a className="font-black  font-sans  text-xl text-red-500">
                <span className="text-6xl  italic ">NF</span>
                <span className="text-xl ">RIDOY</span>
            </a>
        )
    }
    else {
        return (
            <a className="font-black  font-sans  text-xl  text-blue-500">
                <span className="text-6xl text-neutral italic ">NF</span>
                <span className="text-xl text-neutral ">RIDOY</span>
            </a>
        )
    }
}
