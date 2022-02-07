import cars from '../data/cars.json'
import Link from 'next/link'


export default function Car({car}) {
    return <div style={{backgroundColor: car.hex, padding: 20}}> 
        <h1 style={{color: car.textColor}}> {car.name} </h1>
        <Link href="/"passHref>
            <h4 style={{cursor: 'pointer'}}> Go home </h4>
        </Link>
    </div>
}

export async function getStaticPaths() {
    const paths = cars.map(car => ({
            params: {car: car.name }
    }))
    return {
        paths,
        fallback: false
    }
} 

export async function getStaticProps({params}) {
    const car = cars.find(car => car.name == params.car)
    return {
        props: {car}
    }
}