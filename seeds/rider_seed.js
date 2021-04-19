const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


// a sample of historic rider data from allezAPI

async function main() {
    await prisma.rider.createMany({
        data: [
            { firstName: 'Gino', lastName: 'Bartali', nationality: 'ITA'}, // 1
            { firstName: 'Jean', lastName: 'Robic', nationality: 'FRA'}, // 2
            { firstName: 'Pierre', lastName: 'Brambilla', nationality: 'ITA'}, //  1947 KOM | DONE 30
            { firstName: 'Fausto', lastName: 'Coppi', nationality: 'ITA'}, // 1949 & 1952 GC && 1949 & 1952 KOM | DONE 31
            { firstName: 'Ferdinand', lastName: 'Kübler', nationality: 'SWI'}, // 1950 GC && 1954 SPRINT | DONE 32
            { firstName: 'Hugo', lastName: 'Koblet', nationality: 'SWI'}, // 1951 GC | DONE  DONE 33
            { firstName: 'Raphaël', lastName: 'Géminiani', nationality: 'FRA'}, //  1951 KOM | DONE 34
            { firstName: 'Louison', lastName: 'Bobet', nationality: 'FRA'}, // 1953, 1954 & 1955 GC && 1950 KOM | DONE 35
            { firstName: 'Jesùs', lastName: 'Loroño', nationality: 'ESP'}, //  1953 KOM | DONE 36
            { firstName: 'Fritz', lastName: 'Schär', nationality: 'SWI'}, //  1953 SPRINT | DONE 37
            { firstName: 'Stan', lastName: 'Ockers', nationality: 'BEL'}, //  1955 & 1956 SPRINT | DONE 38
            { firstName: 'Roger', lastName: 'Walkowiak', nationality: 'FRA'}, // 1956 GC | DONE 39
            { firstName: 'Jacques', lastName: 'Anquetil', nationality: 'FRA'}, // 1957, 1961, 1962, 1963, 1964 GC | DONE 40
            { firstName: 'Jean', lastName: 'Forestier', nationality: 'FRA'}, //  1957 SPRINT | DONE 41
            { firstName: 'Charly', lastName: 'Gaul', nationality: 'LUX'}, // 1958 GC && 1955 & 1956 KOM | DONE 42
            { firstName: 'Jean', lastName: 'Graczyk', nationality: 'FRA'}, //  1958 & 1960 SPRINT | DONE 43
            { firstName: 'Federico', lastName: 'Bahamontes', nationality: 'ESP'}, // 1959 GC && 1954, 1958, 1959, 1962, 1963 & 1964 KOM | DONE 44
            { firstName: 'André', lastName: 'Darrigade', nationality: 'FRA'}, //  1959 & 1961 SPRINT | DONE 45
            { firstName: 'Gastone', lastName:'Nencini', nationality: 'ITA'}, // 1960 GC && 1957 KOM | DONE 46
            { firstName: 'Imerio', lastName: 'Massignan', nationality: 'ITA'}, //  1960 & 1961 KOM | DONE 47
            { firstName: 'Rudi', lastName: 'Altig', nationality: 'GER'}, //  1962 SPRINT | DONE 48
            { firstName: 'Rik', lastName: 'Van Looy', nationality: 'BEL'}, //  1963 SPRINT | DONE 49
            ]
    })
}

main()
.catch((e) => {
    throw e
})
.finally(async () => {
    await prisma.$disconnect()
})