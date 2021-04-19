const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// a sample of historic tour data from allezAPI

async function main() {
    await prisma.tour.createMany({
        data: [
            {   
                year: 1947,
                gcWinnerId: 2,
                komWinnerId: 3
            },
            {
                year: 1948,
                gcWinnerId: 1,
                komWinnerId: 1
            },
            {
                year: 1949,
                gcWinnerId: 4,
                komWinnerId: 4
            },
            {
                year: 1950,
                gcWinnerId: 5,
                komWinnerId: 8
            },
            {
                year: 1951,
                gcWinnerId: 6,
                komWinnerId: 7
            },
            {
                year: 1952,
                gcWinnerId: 4,
                komWinnerId: 4
            },
            {
                year: 1953,
                gcWinnerId: 8,
                komWinnerId: 9,
                pointsWinnerId: 10
            },
            {
                year: 1954,
                gcWinnerId: 8,
                komWinnerId: 17,
                pointsWinnerId: 5 
            },
            {
                year: 1955,
                gcWinnerId: 8,
                komWinnerId: 15,
                pointsWinnerId: 11
            },
            {
                year: 1956,
                gcWinnerId: 12,
                komWinnerId: 15,
                pointsWinnerId: 11
            },
            {
                year: 1957,
                gcWinnerId: 13,
                komWinnerId: 19, 
                pointsWinnerId: 14
            },
            {
                year: 1958,
                gcWinnerId: 15,
                komWinnerId: 17,
                pointsWinnerId: 16
            },
            {
                year: 1959,
                gcWinnerId: 17,
                komWinnerId: 17,
                pointsWinnerId: 18
            },
            {
                year: 1960, 
                gcWinnerId: 19,
                komWinnerId: 20,
                pointsWinnerId: 16
            },
            {
                year: 1961,
                gcWinnerId: 13,
                komWinnerId: 20,
                pointsWinnerId: 18
            },
            {
                year: 1962,
                gcWinnerId: 13,
                komWinnerId: 19,
                pointsWinnerId: 21
            },
            {
                year: 1963,
                gcWinnerId: 13,
                komWinnerId: 17,
                pointsWinnerId: 22
            }
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