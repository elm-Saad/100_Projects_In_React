import imageUrl from './assets/avatar.jpg'

type DataType ={
    id: number
    name: string
    age: number 
    image: string
}

const Data: DataType[] = [
    {
      id: 1,
      name: 'user num 1',
      age: 21,
      image: 'https://www.course-api.com/images/people/person-3.jpeg',
    },
    {
      id: 2,
      name: 'user num 2',
      age: 19,
      image: 'https://www.course-api.com/images/people/person-4.jpeg',
    },
    {
      id: 3,
      name: 'user num 3',
      age: 39,
      image: imageUrl,
    },
]
  
export default Data