// import React from 'react'
import BlogLayout from '../components/layout/BlogLayout'
import BlogCard from '../components/ui/BlogCard';

function Blog() {

  const blogData = [
    {
      id: 1,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 2,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 3,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 4,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 5,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 6,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 7,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 8,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 9,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
  ];

  return (
    <BlogLayout>
      <div className="relative bg-gray-900 text-white h-[700px]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/930f/4355/0bcba6ef8b56768f41a9178e764cc5ea?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4w5Emi2brMKFJnvLACHgfmSX9DdtK35psqsEokLlmBJ0UIzgM5qfFf8jvuVrQtgXnsAx3pi7wYWH0Dm9hN1uD9X6u1zW5ZFRDcOCvyg8cmu1IvtI-GUkoKPnL0tI6YzbP16Bc7n~tQ2cCtmnn5o6opZabVHzTFeOO-WcVmojwec~nIWWtGNWgOyvTUIhv2QZ1cdzbprg24ynfRUgk~OSTIqEQqihNwVvPCTChx2BlPa1wS8935BrmlvaKiYNHVfHlwcmpNmLqwDu20RYqGJsEklaD9-6K7KqkLm~ZvQMz2lnd8xyrFUX9e6a3pGW9U3bUV2yC3yLMEBgekqEVNQbQ__"
            alt="Background"
            className="w-full "
          />
        </div>
        <div className="relative max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="flex justify-center items-center h-[70vh]">
            <h1 className="font-semibold text-[58px] font-poppins leading-[65px] text-center  mb-6">
              our latest news and updates
            </h1>
          </div>
        </div>
      </div>

      <div className="container mb-10 mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {
          blogData.map((item) => {
            return (
              <BlogCard key={item.id} item={item} />
            )
          })

        }
      </div>

    </BlogLayout>
  )
}

export default Blog
