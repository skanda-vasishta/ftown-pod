interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'The Time Machine Podcast',
    description: `A deep dive into classic science fiction literature, exploring the themes and ideas that shaped the genre. Join us as we discuss H.G. Wells' masterpiece and its impact on modern storytelling.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Canadian Adventures',
    description: `Travel with us through the scenic landscapes of Canada, from the majestic mountains to the vibrant city of Toronto. A visual and narrative journey through one of the world's most beautiful countries.`,
    imgSrc: '/static/images/canada/mountains.jpg',
    href: '/blog/pictures-of-canada',
  },
]

export default projectsData
