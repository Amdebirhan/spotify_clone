import { IoHomeSharp } from 'react-icons/io5'
import { VscRadioTower } from 'react-icons/vsc'
import { BsFillMicFill, BsJournalAlbum } from 'react-icons/bs'
import { BiPodcast, BiPulse } from 'react-icons/bi'

const MenuList = [
    {
        id: 1,
        icon: <IoHomeSharp />,
        name: "Home"
    },
    {
        id: 2,
        icon: <BiPulse />,
        name: "Discover"
    },
    {
        id: 3,
        icon: <VscRadioTower />,
        name: "Radio"
    },
    {
        id: 4,
        icon: <BsFillMicFill />,
        name: "Artist"
    },
    {
        id: 5,
        icon: <BsJournalAlbum />,
        name: "Albums"
    },
    {
        id: 6,
        icon: <BiPodcast />,
        name: "Podcasts"
    }
]

export { MenuList }