import React, { useEffect } from 'react'
import { apiGetAllCategories } from '/src/services/CommonService'
import Input from '../../../../components/ui/Input'
import Button from '../../../../components/ui/Button'
import useFetch from '/src/hooks/useFetch'


const months = [
    {id: "01", name: "January"},
    {id: "02", name: "February"},
    {id: "03", name: "March"},
    {id: "04", name: "April"},
    {id: "05", name: "May"},
    {id: "06", name: "June"},
    {id: "07", name: "July"},
    {id: "08", name: "August"},
    {id: "09", name: "September"},
    {id: "10", name: "October"},
    {id: "11", name: "November"},
    {id: "12", name: "December"},
]



const index = ({ setStep, businessData, setBusinessData, handleBusinessData}) => {
    const [stateId, setStateId] = React.useState(null)
    const [filteredLgas, setfilteredLgas] = React.useState([]) 

    
    // const { isLoading, error, data: categories } = useQuery({
    //     queryKey: ['categories'],
    //     queryFn: () => getData(apiGetAllCategories),
    // })

    const { isLoading, error, data: categories } = useFetch({
        api: apiGetAllCategories,
        key: ['categories'],
      })

    // console.log({categories})

    // const { data: states } = useQuery({
    //     queryKey: ['states'],
    //     queryFn: () => getData(apiGetStates),
    // })

    // console.log("state", states)
      
    // const { data: lgas } = useQuery({
    //     queryKey: ['lgas'],
    //     queryFn: () => getData(apiGetLGAs),
    // })
    // console.log("lga", lgas)

    
    useEffect(() => {
        if(stateId) {
            handleBusinessData({target: {name: "stateId", value: stateId}})
            if (lgas) {
                const values = lgas.filter(lga => lga.state_id === stateId)
                setfilteredLgas(values)
            }
        }
    }, [stateId])

    // console.log("categories", categories, "states", states, "lgas", lgas)
    // console.log("stateId", stateId, "lga", lga)

    const handleCategory = (event) => {
        if (businessData?.categories?.length < 5) {
        setBusinessData(prev => ({...prev, [event.target.name]: [...businessData?.categories, event.target.value] }))
        } 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStep(2)
    }
  return (
    <form action="" className='p-8 px-4 bg-white sm:px-8 rounded-2xl' onSubmit={handleSubmit}>
        <div className='relative mb-11 p-6 border-[6px] border-r-[#E8E8E8] border-t-[#E8E8E8] border-green rounded-full rotate-45 inline-block'>
            <span className='absolute font-semibold -rotate-45 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>1/2</span>
        </div>
        <div className='mb-8'>
            <label htmlFor="name" className='text-sm font-medium'>Business Name</label>
            <Input required={true} value={businessData?.name} onChange={handleBusinessData} className='rounded-lg border-gray' type="text" name="name" id="name" placeholder='Enter your business name' />
        </div>
        <div className='mb-8'>
            <label htmlFor="description" className='text-sm font-medium'>Business Description</label>
            <Input required={true} value={businessData?.description} onChange={handleBusinessData} textarea name="description" id="description" cols="30" rows="10" className='rounded-lg border-gray' placeholder='Enter your business Discription' />
        </div>
        {/* <div className='mb-8'> 
            <label htmlFor="category" className='text-sm font-medium'>Add tags</label>
            <Input required={true} value={businessData?.category} onChange={handleBusinessData} className='rounded-lg border-gray' type="text" name="category" id="category" placeholder='Add a tag to your business' />
        </div> */}
         <div className='justify-between mb-8 md:flex gap-9'>
            <div className='w-full mb-8'>
                <label htmlFor="categories" className='text-sm font-medium'>Categories</label>
                <select onChange={(e) => handleCategory(e)} required className='w-full px-4 py-3 border-2 rounded-lg outline-none cursor-pointer bg-inherit focus:invalid:border-red-400 border-green' name="categories" id="categories" placeholder='Enter Categoies'>
                    <option value="">Select Categories(max 5)</option>
                    {categories?.map((category) => (
                        <option key={category.id} value={category.category}>{category.category}</option>
                    ))}
                </select>
                <div>
                    {businessData.categories?.map((category) => (
                        <span key={category} className='py-1 mr-2 text-xs text-black text-gray-600 bg-gray-200 rounded-full'>{category.category}</span>
                    ))}
                </div>
            </div>
        </div>
        <div className='justify-between mb-8 md:flex gap-9'>
            <div className='w-full mb-8'>
                <label htmlFor="phoneNumber" className='text-sm font-medium'>Phone Number</label>
                <Input required={true} value={businessData?.phoneNumber} onChange={handleBusinessData} className='rounded-lg border-gray' type="text" name="phoneNumber" id="phoneNumber" placeholder='Enter your business Phone number' />
            </div>
            <div className='w-full'>
                <label htmlFor="email" className='text-sm font-medium'>Email Address</label>
                <Input required={true} value={businessData?.email} onChange={handleBusinessData} className='rounded-lg border-gray' type="text" name="email" id="email" placeholder='Enter your business Email Address' />
            </div>
        </div>
        <div className='justify-between mb-8 md:flex gap-9'>
            <div className='w-full mb-8'>
                <label htmlFor="stateId" className='text-sm font-medium'>State</label>
                <select onChange={(e) => setStateId(e.target.value)} required className='w-full px-4 py-3 border-2 rounded-sm rounded-lg outline-none cursor-pointer bg-inherit focus:invalid:border-red-400 border-green' name="stateId" id="stateId" placeholder='Enter state'>
                    <option value="">Enter State</option>
                    {states?.map((state) => (
                        <option key={state.id} value={state.id}>{state.name}</option>
                    ))}
                </select>
            </div>
            <div className='w-full mb-8'>
                <label htmlFor="lgaId" className='text-sm font-medium'>LGA</label>
                <select value={businessData?.lgaId} onChange={handleBusinessData} className='w-full px-4 py-3 border-2 rounded-sm rounded-lg outline-none cursor-pointer bg-inherit focus:invalid:border-red-400 border-green' name="lgaId" id="lgaId" placeholder='Enter LGA'>
                    <option value="">Enter LGA</option>
                    {filteredLgas?.map((lga) => (
                        <option key={lga.id} value={lga.name}>{lga.name}</option>
                    ))}
                </select>
            </div>
            <div className='w-full '>
                <label htmlFor="town" className='text-sm font-medium'>City/Town</label>
                <Input required={true} value={businessData?.town} onChange={handleBusinessData} className='rounded-lg border-gray' type="text" name="town" id="town" placeholder='Enter city' />
            </div>
        </div>
        <div className='mb-8'>
            <label htmlFor="address" className='text-sm font-medium'>Business Address</label>
            <Input required={true} value={businessData?.address} onChange={handleBusinessData} className='rounded-lg border-gray' type="text" name="address" id="address" placeholder='Enter your business Address' />
        </div>
        <div className='justify-between mb-8 md:flex gap-9'>
            <div className='w-full mb-8'>
                <label htmlFor="monthStarted" className='text-sm font-medium'>Business start month</label>
                <select value={businessData?.monthStarted} onChange={handleBusinessData} className='w-full px-4 py-3 border-2 rounded-lg outline-none cursor-pointer bg-inherit focus:invalid:border-red-400 border-green' name="monthStarted" id="monthStarted" placeholder='Enter your business start Month'>
                    <option value="">Enter your business start Month</option>
                    {months?.map((month) => (
                        <option key={month.id} value={month.id}>{month.name}</option>
                    ))}
                </select>
            </div>
            <div className='w-full '>
                <label htmlFor="yearStarted" className='text-sm font-medium'>Business start year</label>
                <Input value={businessData?.yearStarted} onChange={handleBusinessData} className='rounded-lg border-gray' type="number" name="yearStarted" id="yearStarted" placeholder='Enter your business start Year' />
            </div>
        </div>
        <Button type='submit' className='flex justify-center w-full p-3'>
            Next
        </Button>
    </form>
  )
}

export default index


const states = [
    {
        "id": "1",
        "name": "Abia"
    },
    {
        "id": "2",
        "name": "Adamawa"
    },
    {
        "id": "3",
        "name": "Akwa Ibom"
    },
    {
        "id": "4",
        "name": "Anambra"
    },
    {
        "id": "5",
        "name": "Bauchi"
    },
    {
        "id": "6",
        "name": "Bayelsa"
    },
    {
        "id": "7",
        "name": "Benue"
    },
    {
        "id": "8",
        "name": "Borno"
    },
    {
        "id": "9",
        "name": "Cross River"
    },
    {
        "id": "10",
        "name": "Delta"
    },
    {
        "id": "11",
        "name": "Ebonyi"
    },
    {
        "id": "12",
        "name": "Edo"
    },
    {
        "id": "13",
        "name": "Ekiti"
    },
    {
        "id": "14",
        "name": "Enugu"
    },
    {
        "id": "15",
        "name": "FCT"
    },
    {
        "id": "16",
        "name": "Gombe"
    },
    {
        "id": "17",
        "name": "Imo"
    },
    {
        "id": "18",
        "name": "Jigawa"
    },
    {
        "id": "19",
        "name": "Kaduna"
    },
    {
        "id": "20",
        "name": "Kano"
    },
    {
        "id": "21",
        "name": "Katsina"
    },
    {
        "id": "22",
        "name": "Kebbi"
    },
    {
        "id": "23",
        "name": "Kogi"
    },
    {
        "id": "24",
        "name": "Kwara"
    },
    {
        "id": "25",
        "name": "Lagos"
    },
    {
        "id": "26",
        "name": "Nasarawa"
    },
    {
        "id": "27",
        "name": "Niger"
    },
    {
        "id": "28",
        "name": "Ogun"
    },
    {
        "id": "29",
        "name": "Ondo"
    },
    {
        "id": "30",
        "name": "Osun"
    },
    {
        "id": "31",
        "name": "Oyo"
    },
    {
        "id": "32",
        "name": "Plateau"
    },
    {
        "id": "33",
        "name": "Rivers"
    },
    {
        "id": "34",
        "name": "Sokoto"
    },
    {
        "id": "35",
        "name": "Taraba"
    },
    {
        "id": "36",
        "name": "Yobe"
    },
    {
        "id": "37",
        "name": "Zamfara"
    }
]

const lgas = [
    {
        "id": "1",
        "state_id": "1",
        "name": "Aba North"
    },
    {
        "id": "2",
        "state_id": "1",
        "name": "Aba South"
    },
    {
        "id": "3",
        "state_id": "1",
        "name": "Arochukwu"
    },
    {
        "id": "4",
        "state_id": "1",
        "name": "Bende"
    },
    {
        "id": "5",
        "state_id": "1",
        "name": "Ikwuano"
    },
    {
        "id": "6",
        "state_id": "1",
        "name": "Isiala Ngwa North"
    },
    {
        "id": "7",
        "state_id": "1",
        "name": "Isiala Ngwa South"
    },
    {
        "id": "8",
        "state_id": "1",
        "name": "Isuikwuato"
    },
    {
        "id": "9",
        "state_id": "1",
        "name": "Obi Ngwa"
    },
    {
        "id": "10",
        "state_id": "1",
        "name": "Ohafia"
    },
    {
        "id": "11",
        "state_id": "1",
        "name": "Osisioma"
    },
    {
        "id": "12",
        "state_id": "1",
        "name": "Ugwunagbo"
    },
    {
        "id": "13",
        "state_id": "1",
        "name": "Ukwa East"
    },
    {
        "id": "14",
        "state_id": "1",
        "name": "Ukwa West"
    },
    {
        "id": "17",
        "state_id": "1",
        "name": "Umu Nneochi"
    },
    {
        "id": "15",
        "state_id": "1",
        "name": "Umuahia North"
    },
    {
        "id": "16",
        "state_id": "1",
        "name": "Umuahia South"
    },
    {
        "id": "18",
        "state_id": "2",
        "name": "Demsa"
    },
    {
        "id": "19",
        "state_id": "2",
        "name": "Fufure"
    },
    {
        "id": "20",
        "state_id": "2",
        "name": "Ganye"
    },
    {
        "id": "21",
        "state_id": "2",
        "name": "Gayuk"
    },
    {
        "id": "22",
        "state_id": "2",
        "name": "Gombi"
    },
    {
        "id": "23",
        "state_id": "2",
        "name": "Grie"
    },
    {
        "id": "24",
        "state_id": "2",
        "name": "Hong"
    },
    {
        "id": "25",
        "state_id": "2",
        "name": "Jada"
    },
    {
        "id": "26",
        "state_id": "2",
        "name": "Larmurde"
    },
    {
        "id": "27",
        "state_id": "2",
        "name": "Madagali"
    },
    {
        "id": "28",
        "state_id": "2",
        "name": "Maiha"
    },
    {
        "id": "29",
        "state_id": "2",
        "name": "Mayo Belwa"
    },
    {
        "id": "30",
        "state_id": "2",
        "name": "Michika"
    },
    {
        "id": "31",
        "state_id": "2",
        "name": "Mubi North"
    },
    {
        "id": "32",
        "state_id": "2",
        "name": "Mubi South"
    },
    {
        "id": "33",
        "state_id": "2",
        "name": "Numan"
    },
    {
        "id": "34",
        "state_id": "2",
        "name": "Shelleng"
    },
    {
        "id": "35",
        "state_id": "2",
        "name": "Song"
    },
    {
        "id": "36",
        "state_id": "2",
        "name": "Toungo"
    },
    {
        "id": "37",
        "state_id": "2",
        "name": "Yola North"
    },
    {
        "id": "38",
        "state_id": "2",
        "name": "Yola South"
    },
    {
        "id": "39",
        "state_id": "3",
        "name": "Abak"
    },
    {
        "id": "40",
        "state_id": "3",
        "name": "Eastern Obolo"
    },
    {
        "id": "41",
        "state_id": "3",
        "name": "Eket"
    },
    {
        "id": "42",
        "state_id": "3",
        "name": "Esit Eket"
    },
    {
        "id": "43",
        "state_id": "3",
        "name": "Essien Udim"
    },
    {
        "id": "44",
        "state_id": "3",
        "name": "Etim Ekpo"
    },
    {
        "id": "45",
        "state_id": "3",
        "name": "Etinan"
    },
    {
        "id": "46",
        "state_id": "3",
        "name": "Ibeno"
    },
    {
        "id": "47",
        "state_id": "3",
        "name": "Ibesikpo Asutan"
    },
    {
        "id": "48",
        "state_id": "3",
        "name": "Ibiono-Ibom"
    },
    {
        "id": "49",
        "state_id": "3",
        "name": "Ika"
    },
    {
        "id": "50",
        "state_id": "3",
        "name": "Ikono"
    },
    {
        "id": "51",
        "state_id": "3",
        "name": "Ikot Abasi"
    },
    {
        "id": "52",
        "state_id": "3",
        "name": "Ikot Ekpene"
    },
    {
        "id": "53",
        "state_id": "3",
        "name": "Ini"
    },
    {
        "id": "54",
        "state_id": "3",
        "name": "Itu"
    },
    {
        "id": "55",
        "state_id": "3",
        "name": "Mbo"
    },
    {
        "id": "56",
        "state_id": "3",
        "name": "Mkpat-Enin"
    },
    {
        "id": "57",
        "state_id": "3",
        "name": "Nsit-Atai"
    },
    {
        "id": "58",
        "state_id": "3",
        "name": "Nsit-Ibom"
    },
    {
        "id": "59",
        "state_id": "3",
        "name": "Nsit-Ubium"
    },
    {
        "id": "60",
        "state_id": "3",
        "name": "Obot Akara"
    },
    {
        "id": "61",
        "state_id": "3",
        "name": "Okobo"
    },
    {
        "id": "62",
        "state_id": "3",
        "name": "Onna"
    },
    {
        "id": "63",
        "state_id": "3",
        "name": "Oron"
    },
    {
        "id": "64",
        "state_id": "3",
        "name": "Oruk Anam"
    },
    {
        "id": "65",
        "state_id": "3",
        "name": "Udung-Uko"
    },
    {
        "id": "66",
        "state_id": "3",
        "name": "Ukanafun"
    },
    {
        "id": "67",
        "state_id": "3",
        "name": "Uruan"
    },
    {
        "id": "68",
        "state_id": "3",
        "name": "Urue-Offong/Oruko"
    },
    {
        "id": "69",
        "state_id": "3",
        "name": "Uyo"
    },
    {
        "id": "70",
        "state_id": "4",
        "name": "Aguata"
    },
    {
        "id": "71",
        "state_id": "4",
        "name": "Anambra East"
    },
    {
        "id": "72",
        "state_id": "4",
        "name": "Anambra West"
    },
    {
        "id": "73",
        "state_id": "4",
        "name": "Anaocha"
    },
    {
        "id": "74",
        "state_id": "4",
        "name": "Awka North"
    },
    {
        "id": "75",
        "state_id": "4",
        "name": "Awka South"
    },
    {
        "id": "76",
        "state_id": "4",
        "name": "Ayamelum"
    },
    {
        "id": "77",
        "state_id": "4",
        "name": "Dunukofia"
    },
    {
        "id": "78",
        "state_id": "4",
        "name": "Ekwusigo"
    },
    {
        "id": "79",
        "state_id": "4",
        "name": "Idemili North"
    },
    {
        "id": "80",
        "state_id": "4",
        "name": "Idemili South"
    },
    {
        "id": "81",
        "state_id": "4",
        "name": "Ihiala"
    },
    {
        "id": "82",
        "state_id": "4",
        "name": "Njikoka"
    },
    {
        "id": "83",
        "state_id": "4",
        "name": "Nnewi North"
    },
    {
        "id": "84",
        "state_id": "4",
        "name": "Nnewi South"
    },
    {
        "id": "85",
        "state_id": "4",
        "name": "Ogbaru"
    },
    {
        "id": "86",
        "state_id": "4",
        "name": "Onitsha North"
    },
    {
        "id": "87",
        "state_id": "4",
        "name": "Onitsha South"
    },
    {
        "id": "88",
        "state_id": "4",
        "name": "Orumba North"
    },
    {
        "id": "89",
        "state_id": "4",
        "name": "Orumba South"
    },
    {
        "id": "90",
        "state_id": "4",
        "name": "Oyi"
    },
    {
        "id": "91",
        "state_id": "5",
        "name": "Alkaleri"
    },
    {
        "id": "92",
        "state_id": "5",
        "name": "Bauchi"
    },
    {
        "id": "93",
        "state_id": "5",
        "name": "Bogoro"
    },
    {
        "id": "94",
        "state_id": "5",
        "name": "Damban"
    },
    {
        "id": "95",
        "state_id": "5",
        "name": "Darazo"
    },
    {
        "id": "96",
        "state_id": "5",
        "name": "Dass"
    },
    {
        "id": "97",
        "state_id": "5",
        "name": "Gamawa"
    },
    {
        "id": "98",
        "state_id": "5",
        "name": "Ganjuwa"
    },
    {
        "id": "99",
        "state_id": "5",
        "name": "Giade"
    },
    {
        "id": "100",
        "state_id": "5",
        "name": "Itas/Gadau"
    },
    {
        "id": "101",
        "state_id": "5",
        "name": "Jama'are"
    },
    {
        "id": "102",
        "state_id": "5",
        "name": "Katagum"
    },
    {
        "id": "103",
        "state_id": "5",
        "name": "Kirfi"
    },
    {
        "id": "104",
        "state_id": "5",
        "name": "Misau"
    },
    {
        "id": "105",
        "state_id": "5",
        "name": "Ningi"
    },
    {
        "id": "106",
        "state_id": "5",
        "name": "Shira"
    },
    {
        "id": "107",
        "state_id": "5",
        "name": "Tafawa Balewa"
    },
    {
        "id": "108",
        "state_id": "5",
        "name": "Toro"
    },
    {
        "id": "109",
        "state_id": "5",
        "name": "Warji"
    },
    {
        "id": "110",
        "state_id": "5",
        "name": "Zaki"
    },
    {
        "id": "111",
        "state_id": "6",
        "name": "Brass"
    },
    {
        "id": "112",
        "state_id": "6",
        "name": "Ekeremor"
    },
    {
        "id": "113",
        "state_id": "6",
        "name": "Kolokuma/Opokuma"
    },
    {
        "id": "114",
        "state_id": "6",
        "name": "Nembe"
    },
    {
        "id": "115",
        "state_id": "6",
        "name": "Ogbia"
    },
    {
        "id": "116",
        "state_id": "6",
        "name": "Sagbama"
    },
    {
        "id": "117",
        "state_id": "6",
        "name": "Southern Ijaw"
    },
    {
        "id": "118",
        "state_id": "6",
        "name": "Yenagoa"
    },
    {
        "id": "121",
        "state_id": "7",
        "name": "Ado"
    },
    {
        "id": "119",
        "state_id": "7",
        "name": "Agatu"
    },
    {
        "id": "120",
        "state_id": "7",
        "name": "Apa"
    },
    {
        "id": "122",
        "state_id": "7",
        "name": "Buruku"
    },
    {
        "id": "123",
        "state_id": "7",
        "name": "Gboko"
    },
    {
        "id": "124",
        "state_id": "7",
        "name": "Guma"
    },
    {
        "id": "125",
        "state_id": "7",
        "name": "Gwer East"
    },
    {
        "id": "126",
        "state_id": "7",
        "name": "Gwer West"
    },
    {
        "id": "127",
        "state_id": "7",
        "name": "Katsina-Ala"
    },
    {
        "id": "128",
        "state_id": "7",
        "name": "Konshisha"
    },
    {
        "id": "129",
        "state_id": "7",
        "name": "Kwande"
    },
    {
        "id": "130",
        "state_id": "7",
        "name": "Logo"
    },
    {
        "id": "131",
        "state_id": "7",
        "name": "Makurdi"
    },
    {
        "id": "132",
        "state_id": "7",
        "name": "Obi"
    },
    {
        "id": "133",
        "state_id": "7",
        "name": "Ogbadibo"
    },
    {
        "id": "134",
        "state_id": "7",
        "name": "Ohimini"
    },
    {
        "id": "135",
        "state_id": "7",
        "name": "Oju"
    },
    {
        "id": "136",
        "state_id": "7",
        "name": "Okpokwu"
    },
    {
        "id": "137",
        "state_id": "7",
        "name": "Oturkpo"
    },
    {
        "id": "138",
        "state_id": "7",
        "name": "Tarka"
    },
    {
        "id": "139",
        "state_id": "7",
        "name": "Ukum"
    },
    {
        "id": "140",
        "state_id": "7",
        "name": "Ushongo"
    },
    {
        "id": "141",
        "state_id": "7",
        "name": "Vandeikya"
    },
    {
        "id": "142",
        "state_id": "8",
        "name": "Abadam"
    },
    {
        "id": "143",
        "state_id": "8",
        "name": "Askira/Uba"
    },
    {
        "id": "144",
        "state_id": "8",
        "name": "Bama"
    },
    {
        "id": "145",
        "state_id": "8",
        "name": "Bayo"
    },
    {
        "id": "146",
        "state_id": "8",
        "name": "Biu"
    },
    {
        "id": "147",
        "state_id": "8",
        "name": "Chibok"
    },
    {
        "id": "148",
        "state_id": "8",
        "name": "Damboa"
    },
    {
        "id": "149",
        "state_id": "8",
        "name": "Dikwa"
    },
    {
        "id": "150",
        "state_id": "8",
        "name": "Gubio"
    },
    {
        "id": "151",
        "state_id": "8",
        "name": "Guzamala"
    },
    {
        "id": "152",
        "state_id": "8",
        "name": "Gwoza"
    },
    {
        "id": "153",
        "state_id": "8",
        "name": "Hawul"
    },
    {
        "id": "154",
        "state_id": "8",
        "name": "Jere"
    },
    {
        "id": "155",
        "state_id": "8",
        "name": "Kaga"
    },
    {
        "id": "156",
        "state_id": "8",
        "name": "Kala/Balge"
    },
    {
        "id": "157",
        "state_id": "8",
        "name": "Konduga"
    },
    {
        "id": "158",
        "state_id": "8",
        "name": "Kukawa"
    },
    {
        "id": "159",
        "state_id": "8",
        "name": "Kwaya Kusar"
    },
    {
        "id": "160",
        "state_id": "8",
        "name": "Mafa"
    },
    {
        "id": "161",
        "state_id": "8",
        "name": "Magumeri"
    },
    {
        "id": "162",
        "state_id": "8",
        "name": "Maiduguri"
    },
    {
        "id": "163",
        "state_id": "8",
        "name": "Marte"
    },
    {
        "id": "164",
        "state_id": "8",
        "name": "Mobbar"
    },
    {
        "id": "165",
        "state_id": "8",
        "name": "Monguno"
    },
    {
        "id": "166",
        "state_id": "8",
        "name": "Ngala"
    },
    {
        "id": "167",
        "state_id": "8",
        "name": "Nganzai"
    },
    {
        "id": "168",
        "state_id": "8",
        "name": "Shani"
    },
    {
        "id": "169",
        "state_id": "9",
        "name": "Abi"
    },
    {
        "id": "170",
        "state_id": "9",
        "name": "Akamkpa"
    },
    {
        "id": "171",
        "state_id": "9",
        "name": "Akpabuyo"
    },
    {
        "id": "172",
        "state_id": "9",
        "name": "Bakassi"
    },
    {
        "id": "173",
        "state_id": "9",
        "name": "Bekwarra"
    },
    {
        "id": "174",
        "state_id": "9",
        "name": "Biase"
    },
    {
        "id": "175",
        "state_id": "9",
        "name": "Boki"
    },
    {
        "id": "176",
        "state_id": "9",
        "name": "Calabar Municipal"
    },
    {
        "id": "177",
        "state_id": "9",
        "name": "Calabar South"
    },
    {
        "id": "178",
        "state_id": "9",
        "name": "Etung"
    },
    {
        "id": "179",
        "state_id": "9",
        "name": "Ikom"
    },
    {
        "id": "180",
        "state_id": "9",
        "name": "Obanliku"
    },
    {
        "id": "181",
        "state_id": "9",
        "name": "Obubra"
    },
    {
        "id": "182",
        "state_id": "9",
        "name": "Obudu"
    },
    {
        "id": "183",
        "state_id": "9",
        "name": "Odukpani"
    },
    {
        "id": "184",
        "state_id": "9",
        "name": "Ogoja"
    },
    {
        "id": "185",
        "state_id": "9",
        "name": "Yakuur"
    },
    {
        "id": "186",
        "state_id": "9",
        "name": "Yala"
    },
    {
        "id": "187",
        "state_id": "10",
        "name": "Aniocha North"
    },
    {
        "id": "188",
        "state_id": "10",
        "name": "Aniocha South"
    },
    {
        "id": "189",
        "state_id": "10",
        "name": "Bomadi"
    },
    {
        "id": "190",
        "state_id": "10",
        "name": "Burutu"
    },
    {
        "id": "191",
        "state_id": "10",
        "name": "Ethiope East"
    },
    {
        "id": "192",
        "state_id": "10",
        "name": "Ethiope West"
    },
    {
        "id": "193",
        "state_id": "10",
        "name": "Ika North East"
    },
    {
        "id": "194",
        "state_id": "10",
        "name": "Ika South"
    },
    {
        "id": "195",
        "state_id": "10",
        "name": "Isoko North"
    },
    {
        "id": "196",
        "state_id": "10",
        "name": "Isoko South"
    },
    {
        "id": "197",
        "state_id": "10",
        "name": "Ndokwa East"
    },
    {
        "id": "198",
        "state_id": "10",
        "name": "Ndokwa West"
    },
    {
        "id": "199",
        "state_id": "10",
        "name": "Okpe"
    },
    {
        "id": "200",
        "state_id": "10",
        "name": "Oshimili North"
    },
    {
        "id": "201",
        "state_id": "10",
        "name": "Oshimili South"
    },
    {
        "id": "202",
        "state_id": "10",
        "name": "Patani"
    },
    {
        "id": "203",
        "state_id": "10",
        "name": "Sapele, Delta"
    },
    {
        "id": "204",
        "state_id": "10",
        "name": "Udu"
    },
    {
        "id": "205",
        "state_id": "10",
        "name": "Ughelli North"
    },
    {
        "id": "206",
        "state_id": "10",
        "name": "Ughelli South"
    },
    {
        "id": "207",
        "state_id": "10",
        "name": "Ukwuani"
    },
    {
        "id": "208",
        "state_id": "10",
        "name": "Uvwie"
    },
    {
        "id": "209",
        "state_id": "10",
        "name": "Warri North"
    },
    {
        "id": "210",
        "state_id": "10",
        "name": "Warri South"
    },
    {
        "id": "211",
        "state_id": "10",
        "name": "Warri South West"
    },
    {
        "id": "212",
        "state_id": "11",
        "name": "Abakaliki"
    },
    {
        "id": "213",
        "state_id": "11",
        "name": "Afikpo North"
    },
    {
        "id": "214",
        "state_id": "11",
        "name": "Afikpo South"
    },
    {
        "id": "215",
        "state_id": "11",
        "name": "Ebonyi"
    },
    {
        "id": "216",
        "state_id": "11",
        "name": "Ezza North"
    },
    {
        "id": "217",
        "state_id": "11",
        "name": "Ezza South"
    },
    {
        "id": "218",
        "state_id": "11",
        "name": "Ikwo"
    },
    {
        "id": "219",
        "state_id": "11",
        "name": "Ishielu"
    },
    {
        "id": "220",
        "state_id": "11",
        "name": "Ivo"
    },
    {
        "id": "221",
        "state_id": "11",
        "name": "Izzi"
    },
    {
        "id": "222",
        "state_id": "11",
        "name": "Ohaozara"
    },
    {
        "id": "223",
        "state_id": "11",
        "name": "Ohaukwu"
    },
    {
        "id": "224",
        "state_id": "11",
        "name": "Onicha"
    },
    {
        "id": "225",
        "state_id": "12",
        "name": "Akoko-Edo"
    },
    {
        "id": "226",
        "state_id": "12",
        "name": "Egor"
    },
    {
        "id": "227",
        "state_id": "12",
        "name": "Esan Central"
    },
    {
        "id": "228",
        "state_id": "12",
        "name": "Esan North-East"
    },
    {
        "id": "229",
        "state_id": "12",
        "name": "Esan South-East"
    },
    {
        "id": "230",
        "state_id": "12",
        "name": "Esan West"
    },
    {
        "id": "231",
        "state_id": "12",
        "name": "Etsako Central"
    },
    {
        "id": "232",
        "state_id": "12",
        "name": "Etsako East"
    },
    {
        "id": "233",
        "state_id": "12",
        "name": "Etsako West"
    },
    {
        "id": "234",
        "state_id": "12",
        "name": "Igueben"
    },
    {
        "id": "235",
        "state_id": "12",
        "name": "Ikpoba Okha"
    },
    {
        "id": "237",
        "state_id": "12",
        "name": "Oredo"
    },
    {
        "id": "236",
        "state_id": "12",
        "name": "Orhionmwon"
    },
    {
        "id": "238",
        "state_id": "12",
        "name": "Ovia North-East"
    },
    {
        "id": "239",
        "state_id": "12",
        "name": "Ovia South-West"
    },
    {
        "id": "240",
        "state_id": "12",
        "name": "Owan East"
    },
    {
        "id": "241",
        "state_id": "12",
        "name": "Owan West"
    },
    {
        "id": "242",
        "state_id": "12",
        "name": "Uhunmwonde"
    },
    {
        "id": "243",
        "state_id": "13",
        "name": "Ado Ekiti"
    },
    {
        "id": "244",
        "state_id": "13",
        "name": "Efon"
    },
    {
        "id": "245",
        "state_id": "13",
        "name": "Ekiti East"
    },
    {
        "id": "246",
        "state_id": "13",
        "name": "Ekiti South-West"
    },
    {
        "id": "247",
        "state_id": "13",
        "name": "Ekiti West"
    },
    {
        "id": "248",
        "state_id": "13",
        "name": "Emure"
    },
    {
        "id": "249",
        "state_id": "13",
        "name": "Gbonyin"
    },
    {
        "id": "250",
        "state_id": "13",
        "name": "Ido Osi"
    },
    {
        "id": "251",
        "state_id": "13",
        "name": "Ijero"
    },
    {
        "id": "252",
        "state_id": "13",
        "name": "Ikere"
    },
    {
        "id": "253",
        "state_id": "13",
        "name": "Ikole"
    },
    {
        "id": "254",
        "state_id": "13",
        "name": "Ilejemeje"
    },
    {
        "id": "255",
        "state_id": "13",
        "name": "Irepodun/Ifelodun"
    },
    {
        "id": "256",
        "state_id": "13",
        "name": "Ise/Orun"
    },
    {
        "id": "257",
        "state_id": "13",
        "name": "Moba"
    },
    {
        "id": "258",
        "state_id": "13",
        "name": "Oye"
    },
    {
        "id": "259",
        "state_id": "14",
        "name": "Aninri"
    },
    {
        "id": "260",
        "state_id": "14",
        "name": "Awgu"
    },
    {
        "id": "261",
        "state_id": "14",
        "name": "Enugu East"
    },
    {
        "id": "262",
        "state_id": "14",
        "name": "Enugu North"
    },
    {
        "id": "263",
        "state_id": "14",
        "name": "Enugu South"
    },
    {
        "id": "264",
        "state_id": "14",
        "name": "Ezeagu"
    },
    {
        "id": "265",
        "state_id": "14",
        "name": "Igbo Etiti"
    },
    {
        "id": "266",
        "state_id": "14",
        "name": "Igbo Eze North"
    },
    {
        "id": "267",
        "state_id": "14",
        "name": "Igbo Eze South"
    },
    {
        "id": "268",
        "state_id": "14",
        "name": "Isi Uzo"
    },
    {
        "id": "269",
        "state_id": "14",
        "name": "Nkanu East"
    },
    {
        "id": "270",
        "state_id": "14",
        "name": "Nkanu West"
    },
    {
        "id": "271",
        "state_id": "14",
        "name": "Nsukka"
    },
    {
        "id": "272",
        "state_id": "14",
        "name": "Oji River"
    },
    {
        "id": "273",
        "state_id": "14",
        "name": "Udenu"
    },
    {
        "id": "274",
        "state_id": "14",
        "name": "Udi"
    },
    {
        "id": "275",
        "state_id": "14",
        "name": "Uzo Uwani"
    },
    {
        "id": "276",
        "state_id": "15",
        "name": "Abaji"
    },
    {
        "id": "277",
        "state_id": "15",
        "name": "Bwari"
    },
    {
        "id": "278",
        "state_id": "15",
        "name": "Gwagwalada"
    },
    {
        "id": "279",
        "state_id": "15",
        "name": "Kuje"
    },
    {
        "id": "280",
        "state_id": "15",
        "name": "Kwali"
    },
    {
        "id": "281",
        "state_id": "15",
        "name": "Municipal Area Council"
    },
    {
        "id": "282",
        "state_id": "16",
        "name": "Akko"
    },
    {
        "id": "283",
        "state_id": "16",
        "name": "Balanga"
    },
    {
        "id": "284",
        "state_id": "16",
        "name": "Billiri"
    },
    {
        "id": "285",
        "state_id": "16",
        "name": "Dukku"
    },
    {
        "id": "286",
        "state_id": "16",
        "name": "Funakaye"
    },
    {
        "id": "287",
        "state_id": "16",
        "name": "Gombe"
    },
    {
        "id": "288",
        "state_id": "16",
        "name": "Kaltungo"
    },
    {
        "id": "289",
        "state_id": "16",
        "name": "Kwami"
    },
    {
        "id": "290",
        "state_id": "16",
        "name": "Nafada"
    },
    {
        "id": "291",
        "state_id": "16",
        "name": "Shongom"
    },
    {
        "id": "292",
        "state_id": "16",
        "name": "Yamaltu/Deba"
    },
    {
        "id": "293",
        "state_id": "17",
        "name": "Aboh Mbaise"
    },
    {
        "id": "294",
        "state_id": "17",
        "name": "Ahiazu Mbaise"
    },
    {
        "id": "295",
        "state_id": "17",
        "name": "Ehime Mbano"
    },
    {
        "id": "296",
        "state_id": "17",
        "name": "Ezinihitte"
    },
    {
        "id": "297",
        "state_id": "17",
        "name": "Ideato North"
    },
    {
        "id": "298",
        "state_id": "17",
        "name": "Ideato South"
    },
    {
        "id": "299",
        "state_id": "17",
        "name": "Ihitte/Uboma"
    },
    {
        "id": "300",
        "state_id": "17",
        "name": "Ikeduru"
    },
    {
        "id": "301",
        "state_id": "17",
        "name": "Isiala Mbano"
    },
    {
        "id": "302",
        "state_id": "17",
        "name": "Isu"
    },
    {
        "id": "303",
        "state_id": "17",
        "name": "Mbaitoli"
    },
    {
        "id": "304",
        "state_id": "17",
        "name": "Ngor Okpala"
    },
    {
        "id": "305",
        "state_id": "17",
        "name": "Njaba"
    },
    {
        "id": "306",
        "state_id": "17",
        "name": "Nkwerre"
    },
    {
        "id": "307",
        "state_id": "17",
        "name": "Nwangele"
    },
    {
        "id": "308",
        "state_id": "17",
        "name": "Obowo"
    },
    {
        "id": "309",
        "state_id": "17",
        "name": "Oguta"
    },
    {
        "id": "310",
        "state_id": "17",
        "name": "Ohaji/Egbema"
    },
    {
        "id": "311",
        "state_id": "17",
        "name": "Okigwe"
    },
    {
        "id": "312",
        "state_id": "17",
        "name": "Orlu"
    },
    {
        "id": "313",
        "state_id": "17",
        "name": "Orsu"
    },
    {
        "id": "314",
        "state_id": "17",
        "name": "Oru East"
    },
    {
        "id": "315",
        "state_id": "17",
        "name": "Oru West"
    },
    {
        "id": "316",
        "state_id": "17",
        "name": "Owerri Municipal"
    },
    {
        "id": "317",
        "state_id": "17",
        "name": "Owerri North"
    },
    {
        "id": "318",
        "state_id": "17",
        "name": "Owerri West"
    },
    {
        "id": "319",
        "state_id": "17",
        "name": "Unuimo"
    },
    {
        "id": "320",
        "state_id": "18",
        "name": "Auyo"
    },
    {
        "id": "321",
        "state_id": "18",
        "name": "Babura"
    },
    {
        "id": "322",
        "state_id": "18",
        "name": "Biriniwa"
    },
    {
        "id": "323",
        "state_id": "18",
        "name": "Birnin Kudu"
    },
    {
        "id": "324",
        "state_id": "18",
        "name": "Buji"
    },
    {
        "id": "325",
        "state_id": "18",
        "name": "Dutse"
    },
    {
        "id": "326",
        "state_id": "18",
        "name": "Gagarawa"
    },
    {
        "id": "327",
        "state_id": "18",
        "name": "Garki"
    },
    {
        "id": "328",
        "state_id": "18",
        "name": "Gumel"
    },
    {
        "id": "329",
        "state_id": "18",
        "name": "Guri"
    },
    {
        "id": "330",
        "state_id": "18",
        "name": "Gwaram"
    },
    {
        "id": "331",
        "state_id": "18",
        "name": "Gwiwa"
    },
    {
        "id": "332",
        "state_id": "18",
        "name": "Hadejia"
    },
    {
        "id": "333",
        "state_id": "18",
        "name": "Jahun"
    },
    {
        "id": "334",
        "state_id": "18",
        "name": "Kafin Hausa"
    },
    {
        "id": "338",
        "state_id": "18",
        "name": "Kaugama"
    },
    {
        "id": "335",
        "state_id": "18",
        "name": "Kazaure"
    },
    {
        "id": "336",
        "state_id": "18",
        "name": "Kiri Kasama"
    },
    {
        "id": "337",
        "state_id": "18",
        "name": "Kiyawa"
    },
    {
        "id": "339",
        "state_id": "18",
        "name": "Maigatari"
    },
    {
        "id": "340",
        "state_id": "18",
        "name": "Malam Madori"
    },
    {
        "id": "341",
        "state_id": "18",
        "name": "Miga"
    },
    {
        "id": "342",
        "state_id": "18",
        "name": "Ringim"
    },
    {
        "id": "343",
        "state_id": "18",
        "name": "Roni"
    },
    {
        "id": "344",
        "state_id": "18",
        "name": "Sule Tankarkar"
    },
    {
        "id": "345",
        "state_id": "18",
        "name": "Taura"
    },
    {
        "id": "346",
        "state_id": "18",
        "name": "Yankwashi"
    },
    {
        "id": "347",
        "state_id": "19",
        "name": "Birnin Gwari"
    },
    {
        "id": "348",
        "state_id": "19",
        "name": "Chikun"
    },
    {
        "id": "349",
        "state_id": "19",
        "name": "Giwa"
    },
    {
        "id": "350",
        "state_id": "19",
        "name": "Igabi"
    },
    {
        "id": "351",
        "state_id": "19",
        "name": "Ikara"
    },
    {
        "id": "352",
        "state_id": "19",
        "name": "Jaba"
    },
    {
        "id": "353",
        "state_id": "19",
        "name": "Jema'a"
    },
    {
        "id": "354",
        "state_id": "19",
        "name": "Kachia"
    },
    {
        "id": "355",
        "state_id": "19",
        "name": "Kaduna North"
    },
    {
        "id": "356",
        "state_id": "19",
        "name": "Kaduna South"
    },
    {
        "id": "357",
        "state_id": "19",
        "name": "Kagarko"
    },
    {
        "id": "358",
        "state_id": "19",
        "name": "Kajuru"
    },
    {
        "id": "359",
        "state_id": "19",
        "name": "Kaura"
    },
    {
        "id": "360",
        "state_id": "19",
        "name": "Kauru"
    },
    {
        "id": "361",
        "state_id": "19",
        "name": "Kubau"
    },
    {
        "id": "362",
        "state_id": "19",
        "name": "Kudan"
    },
    {
        "id": "363",
        "state_id": "19",
        "name": "Lere"
    },
    {
        "id": "364",
        "state_id": "19",
        "name": "Makarfi"
    },
    {
        "id": "365",
        "state_id": "19",
        "name": "Sabon Gari"
    },
    {
        "id": "366",
        "state_id": "19",
        "name": "Sanga"
    },
    {
        "id": "367",
        "state_id": "19",
        "name": "Soba"
    },
    {
        "id": "368",
        "state_id": "19",
        "name": "Zangon Kataf"
    },
    {
        "id": "369",
        "state_id": "19",
        "name": "Zaria"
    },
    {
        "id": "370",
        "state_id": "20",
        "name": "Ajingi"
    },
    {
        "id": "371",
        "state_id": "20",
        "name": "Albasu"
    },
    {
        "id": "372",
        "state_id": "20",
        "name": "Bagwai"
    },
    {
        "id": "373",
        "state_id": "20",
        "name": "Bebeji"
    },
    {
        "id": "374",
        "state_id": "20",
        "name": "Bichi"
    },
    {
        "id": "375",
        "state_id": "20",
        "name": "Bunkure"
    },
    {
        "id": "376",
        "state_id": "20",
        "name": "Dala"
    },
    {
        "id": "377",
        "state_id": "20",
        "name": "Dambatta"
    },
    {
        "id": "378",
        "state_id": "20",
        "name": "Dawakin Kudu"
    },
    {
        "id": "379",
        "state_id": "20",
        "name": "Dawakin Tofa"
    },
    {
        "id": "380",
        "state_id": "20",
        "name": "Doguwa"
    },
    {
        "id": "381",
        "state_id": "20",
        "name": "Fagge"
    },
    {
        "id": "382",
        "state_id": "20",
        "name": "Gabasawa"
    },
    {
        "id": "383",
        "state_id": "20",
        "name": "Garko"
    },
    {
        "id": "384",
        "state_id": "20",
        "name": "Garun Mallam"
    },
    {
        "id": "385",
        "state_id": "20",
        "name": "Gaya"
    },
    {
        "id": "386",
        "state_id": "20",
        "name": "Gezawa"
    },
    {
        "id": "387",
        "state_id": "20",
        "name": "Gwale"
    },
    {
        "id": "388",
        "state_id": "20",
        "name": "Gwarzo"
    },
    {
        "id": "389",
        "state_id": "20",
        "name": "Kabo"
    },
    {
        "id": "390",
        "state_id": "20",
        "name": "Kano Municipal"
    },
    {
        "id": "391",
        "state_id": "20",
        "name": "Karaye"
    },
    {
        "id": "392",
        "state_id": "20",
        "name": "Kibiya"
    },
    {
        "id": "393",
        "state_id": "20",
        "name": "Kiru"
    },
    {
        "id": "394",
        "state_id": "20",
        "name": "Kumbotso"
    },
    {
        "id": "395",
        "state_id": "20",
        "name": "Kunchi"
    },
    {
        "id": "396",
        "state_id": "20",
        "name": "Kura"
    },
    {
        "id": "397",
        "state_id": "20",
        "name": "Madobi"
    },
    {
        "id": "398",
        "state_id": "20",
        "name": "Makoda"
    },
    {
        "id": "399",
        "state_id": "20",
        "name": "Minjibir"
    },
    {
        "id": "400",
        "state_id": "20",
        "name": "Nasarawa"
    },
    {
        "id": "401",
        "state_id": "20",
        "name": "Rano"
    },
    {
        "id": "402",
        "state_id": "20",
        "name": "Rimin Gado"
    },
    {
        "id": "403",
        "state_id": "20",
        "name": "Rogo"
    },
    {
        "id": "404",
        "state_id": "20",
        "name": "Shanono"
    },
    {
        "id": "405",
        "state_id": "20",
        "name": "Sumaila"
    },
    {
        "id": "406",
        "state_id": "20",
        "name": "Takai"
    },
    {
        "id": "407",
        "state_id": "20",
        "name": "Tarauni"
    },
    {
        "id": "408",
        "state_id": "20",
        "name": "Tofa"
    },
    {
        "id": "409",
        "state_id": "20",
        "name": "Tsanyawa"
    },
    {
        "id": "410",
        "state_id": "20",
        "name": "Tudun Wada"
    },
    {
        "id": "411",
        "state_id": "20",
        "name": "Ungogo"
    },
    {
        "id": "412",
        "state_id": "20",
        "name": "Warawa"
    },
    {
        "id": "413",
        "state_id": "20",
        "name": "Wudil"
    },
    {
        "id": "414",
        "state_id": "21",
        "name": "Bakori"
    },
    {
        "id": "415",
        "state_id": "21",
        "name": "Batagarawa"
    },
    {
        "id": "416",
        "state_id": "21",
        "name": "Batsari"
    },
    {
        "id": "417",
        "state_id": "21",
        "name": "Baure"
    },
    {
        "id": "418",
        "state_id": "21",
        "name": "Bindawa"
    },
    {
        "id": "419",
        "state_id": "21",
        "name": "Charanchi"
    },
    {
        "id": "422",
        "state_id": "21",
        "name": "Dan Musa"
    },
    {
        "id": "420",
        "state_id": "21",
        "name": "Dandume"
    },
    {
        "id": "421",
        "state_id": "21",
        "name": "Danja"
    },
    {
        "id": "423",
        "state_id": "21",
        "name": "Daura"
    },
    {
        "id": "424",
        "state_id": "21",
        "name": "Dutsi"
    },
    {
        "id": "425",
        "state_id": "21",
        "name": "Dutsin Ma"
    },
    {
        "id": "426",
        "state_id": "21",
        "name": "Faskari"
    },
    {
        "id": "427",
        "state_id": "21",
        "name": "Funtua"
    },
    {
        "id": "428",
        "state_id": "21",
        "name": "Ingawa"
    },
    {
        "id": "429",
        "state_id": "21",
        "name": "Jibia"
    },
    {
        "id": "430",
        "state_id": "21",
        "name": "Kafur"
    },
    {
        "id": "431",
        "state_id": "21",
        "name": "Kaita"
    },
    {
        "id": "432",
        "state_id": "21",
        "name": "Kankara"
    },
    {
        "id": "433",
        "state_id": "21",
        "name": "Kankia"
    },
    {
        "id": "434",
        "state_id": "21",
        "name": "Katsina"
    },
    {
        "id": "435",
        "state_id": "21",
        "name": "Kurfi"
    },
    {
        "id": "436",
        "state_id": "21",
        "name": "Kusada"
    },
    {
        "id": "437",
        "state_id": "21",
        "name": "Mai'Adua"
    },
    {
        "id": "438",
        "state_id": "21",
        "name": "Malumfashi"
    },
    {
        "id": "439",
        "state_id": "21",
        "name": "Mani"
    },
    {
        "id": "440",
        "state_id": "21",
        "name": "Mashi"
    },
    {
        "id": "441",
        "state_id": "21",
        "name": "Matazu"
    },
    {
        "id": "442",
        "state_id": "21",
        "name": "Musawa"
    },
    {
        "id": "443",
        "state_id": "21",
        "name": "Rimi"
    },
    {
        "id": "444",
        "state_id": "21",
        "name": "Sabuwa"
    },
    {
        "id": "445",
        "state_id": "21",
        "name": "Safana"
    },
    {
        "id": "446",
        "state_id": "21",
        "name": "Sandamu"
    },
    {
        "id": "447",
        "state_id": "21",
        "name": "Zango"
    },
    {
        "id": "448",
        "state_id": "22",
        "name": "Aleiro"
    },
    {
        "id": "449",
        "state_id": "22",
        "name": "Arewa Dandi"
    },
    {
        "id": "450",
        "state_id": "22",
        "name": "Argungu"
    },
    {
        "id": "451",
        "state_id": "22",
        "name": "Augie"
    },
    {
        "id": "452",
        "state_id": "22",
        "name": "Bagudo"
    },
    {
        "id": "453",
        "state_id": "22",
        "name": "Birnin Kebbi"
    },
    {
        "id": "454",
        "state_id": "22",
        "name": "Bunza"
    },
    {
        "id": "455",
        "state_id": "22",
        "name": "Dandi"
    },
    {
        "id": "456",
        "state_id": "22",
        "name": "Fakai"
    },
    {
        "id": "457",
        "state_id": "22",
        "name": "Gwandu"
    },
    {
        "id": "458",
        "state_id": "22",
        "name": "Jega"
    },
    {
        "id": "459",
        "state_id": "22",
        "name": "Kalgo"
    },
    {
        "id": "460",
        "state_id": "22",
        "name": "Koko/Besse"
    },
    {
        "id": "461",
        "state_id": "22",
        "name": "Maiyama"
    },
    {
        "id": "462",
        "state_id": "22",
        "name": "Ngaski"
    },
    {
        "id": "463",
        "state_id": "22",
        "name": "Sakaba"
    },
    {
        "id": "464",
        "state_id": "22",
        "name": "Shanga"
    },
    {
        "id": "465",
        "state_id": "22",
        "name": "Suru"
    },
    {
        "id": "466",
        "state_id": "22",
        "name": "Wasagu/Danko"
    },
    {
        "id": "467",
        "state_id": "22",
        "name": "Yauri"
    },
    {
        "id": "468",
        "state_id": "22",
        "name": "Zuru"
    },
    {
        "id": "469",
        "state_id": "23",
        "name": "Adavi"
    },
    {
        "id": "470",
        "state_id": "23",
        "name": "Ajaokuta"
    },
    {
        "id": "471",
        "state_id": "23",
        "name": "Ankpa"
    },
    {
        "id": "472",
        "state_id": "23",
        "name": "Bassa"
    },
    {
        "id": "473",
        "state_id": "23",
        "name": "Dekina"
    },
    {
        "id": "474",
        "state_id": "23",
        "name": "Ibaji"
    },
    {
        "id": "475",
        "state_id": "23",
        "name": "Idah"
    },
    {
        "id": "476",
        "state_id": "23",
        "name": "Igalamela Odolu"
    },
    {
        "id": "477",
        "state_id": "23",
        "name": "Ijumu"
    },
    {
        "id": "478",
        "state_id": "23",
        "name": "Kabba/Bunu"
    },
    {
        "id": "479",
        "state_id": "23",
        "name": "Kogi"
    },
    {
        "id": "480",
        "state_id": "23",
        "name": "Lokoja"
    },
    {
        "id": "481",
        "state_id": "23",
        "name": "Mopa Muro"
    },
    {
        "id": "482",
        "state_id": "23",
        "name": "Ofu"
    },
    {
        "id": "483",
        "state_id": "23",
        "name": "Ogori/Magongo"
    },
    {
        "id": "484",
        "state_id": "23",
        "name": "Okehi"
    },
    {
        "id": "485",
        "state_id": "23",
        "name": "Okene"
    },
    {
        "id": "486",
        "state_id": "23",
        "name": "Olamaboro"
    },
    {
        "id": "487",
        "state_id": "23",
        "name": "Omala"
    },
    {
        "id": "488",
        "state_id": "23",
        "name": "Yagba East"
    },
    {
        "id": "489",
        "state_id": "23",
        "name": "Yagba West"
    },
    {
        "id": "490",
        "state_id": "24",
        "name": "Asa"
    },
    {
        "id": "491",
        "state_id": "24",
        "name": "Baruten"
    },
    {
        "id": "492",
        "state_id": "24",
        "name": "Edu"
    },
    {
        "id": "493",
        "state_id": "24",
        "name": "Ekiti, Kwara State"
    },
    {
        "id": "494",
        "state_id": "24",
        "name": "Ifelodun"
    },
    {
        "id": "495",
        "state_id": "24",
        "name": "Ilorin East"
    },
    {
        "id": "496",
        "state_id": "24",
        "name": "Ilorin South"
    },
    {
        "id": "497",
        "state_id": "24",
        "name": "Ilorin West"
    },
    {
        "id": "498",
        "state_id": "24",
        "name": "Irepodun"
    },
    {
        "id": "499",
        "state_id": "24",
        "name": "Isin"
    },
    {
        "id": "500",
        "state_id": "24",
        "name": "Kaiama"
    },
    {
        "id": "501",
        "state_id": "24",
        "name": "Moro"
    },
    {
        "id": "502",
        "state_id": "24",
        "name": "Offa"
    },
    {
        "id": "503",
        "state_id": "24",
        "name": "Oke Ero"
    },
    {
        "id": "504",
        "state_id": "24",
        "name": "Oyun"
    },
    {
        "id": "505",
        "state_id": "24",
        "name": "Pategi"
    },
    {
        "id": "506",
        "state_id": "25",
        "name": "Agege"
    },
    {
        "id": "507",
        "state_id": "25",
        "name": "Ajeromi-Ifelodun"
    },
    {
        "id": "508",
        "state_id": "25",
        "name": "Alimosho"
    },
    {
        "id": "509",
        "state_id": "25",
        "name": "Amuwo-Odofin"
    },
    {
        "id": "510",
        "state_id": "25",
        "name": "Apapa"
    },
    {
        "id": "511",
        "state_id": "25",
        "name": "Badagry"
    },
    {
        "id": "512",
        "state_id": "25",
        "name": "Epe"
    },
    {
        "id": "513",
        "state_id": "25",
        "name": "Eti Osa"
    },
    {
        "id": "514",
        "state_id": "25",
        "name": "Ibeju-Lekki"
    },
    {
        "id": "515",
        "state_id": "25",
        "name": "Ifako-Ijaiye"
    },
    {
        "id": "516",
        "state_id": "25",
        "name": "Ikeja"
    },
    {
        "id": "517",
        "state_id": "25",
        "name": "Ikorodu"
    },
    {
        "id": "518",
        "state_id": "25",
        "name": "Kosofe"
    },
    {
        "id": "519",
        "state_id": "25",
        "name": "Lagos Island"
    },
    {
        "id": "520",
        "state_id": "25",
        "name": "Lagos Mainland"
    },
    {
        "id": "521",
        "state_id": "25",
        "name": "Mushin"
    },
    {
        "id": "522",
        "state_id": "25",
        "name": "Ojo"
    },
    {
        "id": "523",
        "state_id": "25",
        "name": "Oshodi-Isolo"
    },
    {
        "id": "524",
        "state_id": "25",
        "name": "Shomolu"
    },
    {
        "id": "525",
        "state_id": "25",
        "name": "Surulere, Lagos State"
    },
    {
        "id": "526",
        "state_id": "26",
        "name": "Akwanga"
    },
    {
        "id": "527",
        "state_id": "26",
        "name": "Awe"
    },
    {
        "id": "528",
        "state_id": "26",
        "name": "Doma"
    },
    {
        "id": "529",
        "state_id": "26",
        "name": "Karu"
    },
    {
        "id": "530",
        "state_id": "26",
        "name": "Keana"
    },
    {
        "id": "531",
        "state_id": "26",
        "name": "Keffi"
    },
    {
        "id": "532",
        "state_id": "26",
        "name": "Kokona"
    },
    {
        "id": "533",
        "state_id": "26",
        "name": "Lafia"
    },
    {
        "id": "534",
        "state_id": "26",
        "name": "Nasarawa"
    },
    {
        "id": "535",
        "state_id": "26",
        "name": "Nasarawa Egon"
    },
    {
        "id": "536",
        "state_id": "26",
        "name": "Obi"
    },
    {
        "id": "537",
        "state_id": "26",
        "name": "Toto"
    },
    {
        "id": "538",
        "state_id": "26",
        "name": "Wamba"
    },
    {
        "id": "539",
        "state_id": "27",
        "name": "Agaie"
    },
    {
        "id": "540",
        "state_id": "27",
        "name": "Agwara"
    },
    {
        "id": "541",
        "state_id": "27",
        "name": "Bida"
    },
    {
        "id": "542",
        "state_id": "27",
        "name": "Borgu"
    },
    {
        "id": "543",
        "state_id": "27",
        "name": "Bosso"
    },
    {
        "id": "544",
        "state_id": "27",
        "name": "Chanchaga"
    },
    {
        "id": "545",
        "state_id": "27",
        "name": "Edati"
    },
    {
        "id": "546",
        "state_id": "27",
        "name": "Gbako"
    },
    {
        "id": "547",
        "state_id": "27",
        "name": "Gurara"
    },
    {
        "id": "548",
        "state_id": "27",
        "name": "Katcha"
    },
    {
        "id": "549",
        "state_id": "27",
        "name": "Kontagora"
    },
    {
        "id": "550",
        "state_id": "27",
        "name": "Lapai"
    },
    {
        "id": "551",
        "state_id": "27",
        "name": "Lavun"
    },
    {
        "id": "552",
        "state_id": "27",
        "name": "Magama"
    },
    {
        "id": "553",
        "state_id": "27",
        "name": "Mariga"
    },
    {
        "id": "554",
        "state_id": "27",
        "name": "Mashegu"
    },
    {
        "id": "555",
        "state_id": "27",
        "name": "Mokwa"
    },
    {
        "id": "556",
        "state_id": "27",
        "name": "Moya"
    },
    {
        "id": "557",
        "state_id": "27",
        "name": "Paikoro"
    },
    {
        "id": "558",
        "state_id": "27",
        "name": "Rafi"
    },
    {
        "id": "559",
        "state_id": "27",
        "name": "Rijau"
    },
    {
        "id": "560",
        "state_id": "27",
        "name": "Shiroro"
    },
    {
        "id": "561",
        "state_id": "27",
        "name": "Suleja"
    },
    {
        "id": "562",
        "state_id": "27",
        "name": "Tafa"
    },
    {
        "id": "563",
        "state_id": "27",
        "name": "Wushishi"
    },
    {
        "id": "564",
        "state_id": "28",
        "name": "Abeokuta North"
    },
    {
        "id": "565",
        "state_id": "28",
        "name": "Abeokuta South"
    },
    {
        "id": "566",
        "state_id": "28",
        "name": "Ado-Odo/Ota"
    },
    {
        "id": "567",
        "state_id": "28",
        "name": "Egbado North"
    },
    {
        "id": "568",
        "state_id": "28",
        "name": "Egbado South"
    },
    {
        "id": "569",
        "state_id": "28",
        "name": "Ewekoro"
    },
    {
        "id": "570",
        "state_id": "28",
        "name": "Ifo"
    },
    {
        "id": "571",
        "state_id": "28",
        "name": "Ijebu East"
    },
    {
        "id": "572",
        "state_id": "28",
        "name": "Ijebu North"
    },
    {
        "id": "573",
        "state_id": "28",
        "name": "Ijebu North East"
    },
    {
        "id": "574",
        "state_id": "28",
        "name": "Ijebu Ode"
    },
    {
        "id": "575",
        "state_id": "28",
        "name": "Ikenne"
    },
    {
        "id": "576",
        "state_id": "28",
        "name": "Imeko Afon"
    },
    {
        "id": "577",
        "state_id": "28",
        "name": "Ipokia"
    },
    {
        "id": "578",
        "state_id": "28",
        "name": "Obafemi Owode"
    },
    {
        "id": "579",
        "state_id": "28",
        "name": "Odeda"
    },
    {
        "id": "580",
        "state_id": "28",
        "name": "Odogbolu"
    },
    {
        "id": "581",
        "state_id": "28",
        "name": "Ogun Waterside"
    },
    {
        "id": "582",
        "state_id": "28",
        "name": "Remo North"
    },
    {
        "id": "583",
        "state_id": "28",
        "name": "Shagamu"
    },
    {
        "id": "584",
        "state_id": "29",
        "name": "Akoko North-East"
    },
    {
        "id": "585",
        "state_id": "29",
        "name": "Akoko North-West"
    },
    {
        "id": "587",
        "state_id": "29",
        "name": "Akoko South-East"
    },
    {
        "id": "586",
        "state_id": "29",
        "name": "Akoko South-West"
    },
    {
        "id": "588",
        "state_id": "29",
        "name": "Akure North"
    },
    {
        "id": "589",
        "state_id": "29",
        "name": "Akure South"
    },
    {
        "id": "590",
        "state_id": "29",
        "name": "Ese Odo"
    },
    {
        "id": "591",
        "state_id": "29",
        "name": "Idanre"
    },
    {
        "id": "592",
        "state_id": "29",
        "name": "Ifedore"
    },
    {
        "id": "593",
        "state_id": "29",
        "name": "Ilaje"
    },
    {
        "id": "594",
        "state_id": "29",
        "name": "Ile Oluji/Okeigbo"
    },
    {
        "id": "595",
        "state_id": "29",
        "name": "Irele"
    },
    {
        "id": "596",
        "state_id": "29",
        "name": "Odigbo"
    },
    {
        "id": "597",
        "state_id": "29",
        "name": "Okitipupa"
    },
    {
        "id": "598",
        "state_id": "29",
        "name": "Ondo East"
    },
    {
        "id": "599",
        "state_id": "29",
        "name": "Ondo West"
    },
    {
        "id": "600",
        "state_id": "29",
        "name": "Ose"
    },
    {
        "id": "601",
        "state_id": "29",
        "name": "Owo"
    },
    {
        "id": "604",
        "state_id": "30",
        "name": "Aiyedaade"
    },
    {
        "id": "605",
        "state_id": "30",
        "name": "Aiyedire"
    },
    {
        "id": "602",
        "state_id": "30",
        "name": "Atakunmosa East"
    },
    {
        "id": "603",
        "state_id": "30",
        "name": "Atakunmosa West"
    },
    {
        "id": "606",
        "state_id": "30",
        "name": "Boluwaduro"
    },
    {
        "id": "607",
        "state_id": "30",
        "name": "Boripe"
    },
    {
        "id": "608",
        "state_id": "30",
        "name": "Ede North"
    },
    {
        "id": "609",
        "state_id": "30",
        "name": "Ede South"
    },
    {
        "id": "614",
        "state_id": "30",
        "name": "Egbedore"
    },
    {
        "id": "615",
        "state_id": "30",
        "name": "Ejigbo"
    },
    {
        "id": "610",
        "state_id": "30",
        "name": "Ife Central"
    },
    {
        "id": "611",
        "state_id": "30",
        "name": "Ife East"
    },
    {
        "id": "612",
        "state_id": "30",
        "name": "Ife North"
    },
    {
        "id": "613",
        "state_id": "30",
        "name": "Ife South"
    },
    {
        "id": "616",
        "state_id": "30",
        "name": "Ifedayo"
    },
    {
        "id": "617",
        "state_id": "30",
        "name": "Ifelodun"
    },
    {
        "id": "618",
        "state_id": "30",
        "name": "Ila"
    },
    {
        "id": "619",
        "state_id": "30",
        "name": "Ilesa East"
    },
    {
        "id": "620",
        "state_id": "30",
        "name": "Ilesa West"
    },
    {
        "id": "621",
        "state_id": "30",
        "name": "Irepodun"
    },
    {
        "id": "622",
        "state_id": "30",
        "name": "Irewole"
    },
    {
        "id": "623",
        "state_id": "30",
        "name": "Isokan"
    },
    {
        "id": "624",
        "state_id": "30",
        "name": "Iwo"
    },
    {
        "id": "625",
        "state_id": "30",
        "name": "Obokun"
    },
    {
        "id": "626",
        "state_id": "30",
        "name": "Odo Otin"
    },
    {
        "id": "627",
        "state_id": "30",
        "name": "Ola Oluwa"
    },
    {
        "id": "628",
        "state_id": "30",
        "name": "Olorunda"
    },
    {
        "id": "629",
        "state_id": "30",
        "name": "Oriade"
    },
    {
        "id": "630",
        "state_id": "30",
        "name": "Orolu"
    },
    {
        "id": "631",
        "state_id": "30",
        "name": "Osogbo"
    },
    {
        "id": "632",
        "state_id": "31",
        "name": "Afijio"
    },
    {
        "id": "633",
        "state_id": "31",
        "name": "Akinyele"
    },
    {
        "id": "634",
        "state_id": "31",
        "name": "Atiba"
    },
    {
        "id": "635",
        "state_id": "31",
        "name": "Atisbo"
    },
    {
        "id": "636",
        "state_id": "31",
        "name": "Egbeda"
    },
    {
        "id": "637",
        "state_id": "31",
        "name": "Ibadan North"
    },
    {
        "id": "638",
        "state_id": "31",
        "name": "Ibadan North-East"
    },
    {
        "id": "639",
        "state_id": "31",
        "name": "Ibadan North-West"
    },
    {
        "id": "640",
        "state_id": "31",
        "name": "Ibadan South-East"
    },
    {
        "id": "641",
        "state_id": "31",
        "name": "Ibadan South-West"
    },
    {
        "id": "642",
        "state_id": "31",
        "name": "Ibarapa Central"
    },
    {
        "id": "643",
        "state_id": "31",
        "name": "Ibarapa East"
    },
    {
        "id": "644",
        "state_id": "31",
        "name": "Ibarapa North"
    },
    {
        "id": "645",
        "state_id": "31",
        "name": "Ido"
    },
    {
        "id": "646",
        "state_id": "31",
        "name": "Irepo"
    },
    {
        "id": "647",
        "state_id": "31",
        "name": "Iseyin"
    },
    {
        "id": "648",
        "state_id": "31",
        "name": "Itesiwaju"
    },
    {
        "id": "649",
        "state_id": "31",
        "name": "Iwajowa"
    },
    {
        "id": "650",
        "state_id": "31",
        "name": "Kajola"
    },
    {
        "id": "651",
        "state_id": "31",
        "name": "Lagelu"
    },
    {
        "id": "652",
        "state_id": "31",
        "name": "Ogbomosho North"
    },
    {
        "id": "653",
        "state_id": "31",
        "name": "Ogbomosho South"
    },
    {
        "id": "654",
        "state_id": "31",
        "name": "Ogo Oluwa"
    },
    {
        "id": "655",
        "state_id": "31",
        "name": "Olorunsogo"
    },
    {
        "id": "656",
        "state_id": "31",
        "name": "Oluyole"
    },
    {
        "id": "657",
        "state_id": "31",
        "name": "Ona Ara"
    },
    {
        "id": "658",
        "state_id": "31",
        "name": "Orelope"
    },
    {
        "id": "659",
        "state_id": "31",
        "name": "Ori Ire"
    },
    {
        "id": "660",
        "state_id": "31",
        "name": "Oyo"
    },
    {
        "id": "661",
        "state_id": "31",
        "name": "Oyo East"
    },
    {
        "id": "662",
        "state_id": "31",
        "name": "Saki East"
    },
    {
        "id": "663",
        "state_id": "31",
        "name": "Saki West"
    },
    {
        "id": "664",
        "state_id": "31",
        "name": "Surulere, Oyo State"
    },
    {
        "id": "666",
        "state_id": "32",
        "name": "Barkin Ladi"
    },
    {
        "id": "667",
        "state_id": "32",
        "name": "Bassa"
    },
    {
        "id": "665",
        "state_id": "32",
        "name": "Bokkos"
    },
    {
        "id": "668",
        "state_id": "32",
        "name": "Jos East"
    },
    {
        "id": "669",
        "state_id": "32",
        "name": "Jos North"
    },
    {
        "id": "670",
        "state_id": "32",
        "name": "Jos South"
    },
    {
        "id": "671",
        "state_id": "32",
        "name": "Kanam"
    },
    {
        "id": "672",
        "state_id": "32",
        "name": "Kanke"
    },
    {
        "id": "674",
        "state_id": "32",
        "name": "Langtang North"
    },
    {
        "id": "673",
        "state_id": "32",
        "name": "Langtang South"
    },
    {
        "id": "675",
        "state_id": "32",
        "name": "Mangu"
    },
    {
        "id": "676",
        "state_id": "32",
        "name": "Mikang"
    },
    {
        "id": "677",
        "state_id": "32",
        "name": "Pankshin"
    },
    {
        "id": "678",
        "state_id": "32",
        "name": "Qua'an Pan"
    },
    {
        "id": "679",
        "state_id": "32",
        "name": "Riyom"
    },
    {
        "id": "680",
        "state_id": "32",
        "name": "Shendam"
    },
    {
        "id": "681",
        "state_id": "32",
        "name": "Wase"
    },
    {
        "id": "682",
        "state_id": "33",
        "name": "Abua/Odual"
    },
    {
        "id": "683",
        "state_id": "33",
        "name": "Ahoada East"
    },
    {
        "id": "684",
        "state_id": "33",
        "name": "Ahoada West"
    },
    {
        "id": "685",
        "state_id": "33",
        "name": "Akuku-Toru"
    },
    {
        "id": "686",
        "state_id": "33",
        "name": "Andoni"
    },
    {
        "id": "687",
        "state_id": "33",
        "name": "Asari-Toru"
    },
    {
        "id": "688",
        "state_id": "33",
        "name": "Bonny"
    },
    {
        "id": "689",
        "state_id": "33",
        "name": "Degema"
    },
    {
        "id": "690",
        "state_id": "33",
        "name": "Eleme"
    },
    {
        "id": "691",
        "state_id": "33",
        "name": "Emuoha"
    },
    {
        "id": "692",
        "state_id": "33",
        "name": "Etche"
    },
    {
        "id": "693",
        "state_id": "33",
        "name": "Gokana"
    },
    {
        "id": "694",
        "state_id": "33",
        "name": "Ikwerre"
    },
    {
        "id": "695",
        "state_id": "33",
        "name": "Khana"
    },
    {
        "id": "696",
        "state_id": "33",
        "name": "Obio/Akpor"
    },
    {
        "id": "697",
        "state_id": "33",
        "name": "Ogba/Egbema/Ndoni"
    },
    {
        "id": "698",
        "state_id": "33",
        "name": "Ogu/Bolo"
    },
    {
        "id": "699",
        "state_id": "33",
        "name": "Okrika"
    },
    {
        "id": "700",
        "state_id": "33",
        "name": "Omuma"
    },
    {
        "id": "701",
        "state_id": "33",
        "name": "Opobo/Nkoro"
    },
    {
        "id": "702",
        "state_id": "33",
        "name": "Oyigbo"
    },
    {
        "id": "703",
        "state_id": "33",
        "name": "Port Harcourt"
    },
    {
        "id": "704",
        "state_id": "33",
        "name": "Tai"
    },
    {
        "id": "705",
        "state_id": "34",
        "name": "Binji"
    },
    {
        "id": "706",
        "state_id": "34",
        "name": "Bodinga"
    },
    {
        "id": "707",
        "state_id": "34",
        "name": "Dange Shuni"
    },
    {
        "id": "708",
        "state_id": "34",
        "name": "Gada"
    },
    {
        "id": "709",
        "state_id": "34",
        "name": "Goronyo"
    },
    {
        "id": "710",
        "state_id": "34",
        "name": "Gudu"
    },
    {
        "id": "711",
        "state_id": "34",
        "name": "Gwadabawa"
    },
    {
        "id": "712",
        "state_id": "34",
        "name": "Illela"
    },
    {
        "id": "713",
        "state_id": "34",
        "name": "Isa"
    },
    {
        "id": "714",
        "state_id": "34",
        "name": "Kebbe"
    },
    {
        "id": "715",
        "state_id": "34",
        "name": "Kware"
    },
    {
        "id": "716",
        "state_id": "34",
        "name": "Rabah"
    },
    {
        "id": "717",
        "state_id": "34",
        "name": "Sabon Birni"
    },
    {
        "id": "718",
        "state_id": "34",
        "name": "Shagari"
    },
    {
        "id": "719",
        "state_id": "34",
        "name": "Silame"
    },
    {
        "id": "720",
        "state_id": "34",
        "name": "Sokoto North"
    },
    {
        "id": "721",
        "state_id": "34",
        "name": "Sokoto South"
    },
    {
        "id": "722",
        "state_id": "34",
        "name": "Tambuwal"
    },
    {
        "id": "723",
        "state_id": "34",
        "name": "Tangaza"
    },
    {
        "id": "724",
        "state_id": "34",
        "name": "Tureta"
    },
    {
        "id": "725",
        "state_id": "34",
        "name": "Wamako"
    },
    {
        "id": "726",
        "state_id": "34",
        "name": "Wurno"
    },
    {
        "id": "727",
        "state_id": "34",
        "name": "Yabo"
    },
    {
        "id": "728",
        "state_id": "35",
        "name": "Ardo Kola"
    },
    {
        "id": "729",
        "state_id": "35",
        "name": "Bali"
    },
    {
        "id": "730",
        "state_id": "35",
        "name": "Donga"
    },
    {
        "id": "731",
        "state_id": "35",
        "name": "Gashaka"
    },
    {
        "id": "732",
        "state_id": "35",
        "name": "Gassol"
    },
    {
        "id": "733",
        "state_id": "35",
        "name": "Ibi"
    },
    {
        "id": "734",
        "state_id": "35",
        "name": "Jalingo"
    },
    {
        "id": "735",
        "state_id": "35",
        "name": "Karim Lamido"
    },
    {
        "id": "736",
        "state_id": "35",
        "name": "Kumi"
    },
    {
        "id": "737",
        "state_id": "35",
        "name": "Lau"
    },
    {
        "id": "738",
        "state_id": "35",
        "name": "Sardauna"
    },
    {
        "id": "739",
        "state_id": "35",
        "name": "Takum"
    },
    {
        "id": "740",
        "state_id": "35",
        "name": "Ussa"
    },
    {
        "id": "741",
        "state_id": "35",
        "name": "Wukari"
    },
    {
        "id": "742",
        "state_id": "35",
        "name": "Yorro"
    },
    {
        "id": "743",
        "state_id": "35",
        "name": "Zing"
    },
    {
        "id": "744",
        "state_id": "36",
        "name": "Bade"
    },
    {
        "id": "745",
        "state_id": "36",
        "name": "Bursari"
    },
    {
        "id": "746",
        "state_id": "36",
        "name": "Damaturu"
    },
    {
        "id": "747",
        "state_id": "36",
        "name": "Fika"
    },
    {
        "id": "748",
        "state_id": "36",
        "name": "Fune"
    },
    {
        "id": "749",
        "state_id": "36",
        "name": "Geidam"
    },
    {
        "id": "750",
        "state_id": "36",
        "name": "Gujba"
    },
    {
        "id": "751",
        "state_id": "36",
        "name": "Gulani"
    },
    {
        "id": "752",
        "state_id": "36",
        "name": "Jakusko"
    },
    {
        "id": "753",
        "state_id": "36",
        "name": "Karasuwa"
    },
    {
        "id": "754",
        "state_id": "36",
        "name": "Machina"
    },
    {
        "id": "755",
        "state_id": "36",
        "name": "Nangere"
    },
    {
        "id": "756",
        "state_id": "36",
        "name": "Nguru"
    },
    {
        "id": "757",
        "state_id": "36",
        "name": "Potiskum"
    },
    {
        "id": "758",
        "state_id": "36",
        "name": "Tarmuwa"
    },
    {
        "id": "759",
        "state_id": "36",
        "name": "Yunusari"
    },
    {
        "id": "760",
        "state_id": "36",
        "name": "Yusufari"
    },
    {
        "id": "761",
        "state_id": "37",
        "name": "Anka"
    },
    {
        "id": "762",
        "state_id": "37",
        "name": "Bakura"
    },
    {
        "id": "763",
        "state_id": "37",
        "name": "Birnin Magaji/Kiyaw"
    },
    {
        "id": "764",
        "state_id": "37",
        "name": "Bukkuyum"
    },
    {
        "id": "765",
        "state_id": "37",
        "name": "Bungudu"
    },
    {
        "id": "773",
        "state_id": "37",
        "name": "Chafe"
    },
    {
        "id": "766",
        "state_id": "37",
        "name": "Gummi"
    },
    {
        "id": "767",
        "state_id": "37",
        "name": "Gusau"
    },
    {
        "id": "768",
        "state_id": "37",
        "name": "Kaura Namoda"
    },
    {
        "id": "769",
        "state_id": "37",
        "name": "Maradun"
    },
    {
        "id": "770",
        "state_id": "37",
        "name": "Maru"
    },
    {
        "id": "771",
        "state_id": "37",
        "name": "Shinkafi"
    },
    {
        "id": "772",
        "state_id": "37",
        "name": "Talata Mafara"
    },
    {
        "id": "774",
        "state_id": "37",
        "name": "Zurmi"
    }
]

