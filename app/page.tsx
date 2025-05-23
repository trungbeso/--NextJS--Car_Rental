import Image from "next/image";
import {Hero,CarCard, SearchBar} from "@/components";
import CustomFilter from "@components/CustomFilter";
import {fetchCars} from "@utils";
import {fuels, yearsOfProduction} from "@constants";
import ShowMore from "../components/ShowMore";


export default async function Home( {searchParams} : any) {
    const allCars = await fetchCars({
        manufacturer: searchParams.make || '',
        year: searchParams.year || '',
        fuel: searchParams.fuel || '',
        model:searchParams.model || '',
        drive: searchParams.drive || '',

    });

    console.log(allCars)

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main className='overflow-hidden'>
            <Hero/>
            <div className='mt-12 padding-x padding-y max-width' id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                    <p>Explore the cars</p>
                </div>
                <div className="home__filters">
                    <SearchBar/>
                    <div className="home__filter-container">
                        <CustomFilter title='fuel' options={fuels}/>
                        <CustomFilter title='year' options={yearsOfProduction}/>
                    </div>

                    {!isDataEmpty ? (
                        <section>
                            <div className='home__cars-wrapper'>
                                {allCars?.map((car) => (
                                    <CarCard car={car}/>
                                ))}
                            </div>
                            <ShowMore
                                pageNumber={(searchParams.limit || 10) / 10}
                                isNext = {(searchParams.limit || 10) > allCars.length}
                            />

                        </section>
                    ) : (
                        <div className='home__error-container'>
                            <h2 className="text-black text-xl font-bold">
                                no cars
                            </h2>
                            <p>{allCars?.message}</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
