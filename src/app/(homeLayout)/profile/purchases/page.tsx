// import { PurchaseHistory } from 
// import { PurchaseRecord } from 

import { PurchaseRecord } from "@/api/type/purchase";
import { PurchaseHistory } from "@/components/student/profile/purchase/PurchaseHistory";

 const purchaseData: PurchaseRecord[] = [
  {
    id: "1",
    date: "1st September, 2021 at 11:30 PM",
    totalCourses: 2,
    totalAmount: 75.00,
    paymentMethod: "Credit Card",
    customerName: "Kevin Gilbert",
    cardNumber: "4142 **** **** ****",
    courses: [
      {
        id: "c1",
        title: "Learn Ethical Hacking From Scratch",
        instructor: "Marvin McKinney",
        rating: 4.7,
        reviewsCount: 451444,
        price: 13.99,
        thumbnail: "/imges/course.png" // استبدلها بصور حقيقية
      },
      {
        id: "c2",
        title: "Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates",
        instructor: "Esther Howard",
        rating: 4.7,
        reviewsCount: 451444,
        price: 49.00,
        thumbnail: "/imges/course2.png"
      }
    ]
  },
   {
    id: "11",
    date: "1st September, 2021 at 11:30 PM",
    totalCourses: 2,
    totalAmount: 75.00,
    paymentMethod: "Credit Card",
    customerName: "Kevin Gilbert",
    cardNumber: "4142 **** **** ****",
    courses: [
      {
        id: "c1",
        title: "Learn Ethical Hacking From Scratch",
        instructor: "Marvin McKinney",
        rating: 4.7,
        reviewsCount: 451444,
        price: 13.99,
        thumbnail: "/imges/course.png" // استبدلها بصور حقيقية
      },
      {
        id: "c2",
        title: "Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates",
        instructor: "Esther Howard",
        rating: 4.7,
        reviewsCount: 451444,
        price: 49.00,
        thumbnail: "/imges/course2.png"
      }
    ]
  },
   {
    id: "7",
    date: "1st September, 2021 at 11:30 PM",
    totalCourses: 2,
    totalAmount: 75.00,
    paymentMethod: "Credit Card",
    customerName: "Kevin Gilbert",
    cardNumber: "4142 **** **** ****",
    courses: [
      {
        id: "c1",
        title: "Learn Ethical Hacking From Scratch",
        instructor: "Marvin McKinney",
        rating: 4.7,
        reviewsCount: 451444,
        price: 13.99,
        thumbnail: "/imges/course.png" // استبدلها بصور حقيقية
      },
      {
        id: "c2",
        title: "Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates",
        instructor: "Esther Howard",
        rating: 4.7,
        reviewsCount: 451444,
        price: 49.00,
        thumbnail: "/imges/course2.png"
      }
    ]
  },
   {
    id: "5",
    date: "1st September, 2021 at 11:30 PM",
    totalCourses: 2,
    totalAmount: 75.00,
    paymentMethod: "Credit Card",
    customerName: "Kevin Gilbert",
    cardNumber: "4142 **** **** ****",
    courses: [
      {
        id: "c4",
        title: "Learn Ethical Hacking From Scratch",
        instructor: "Marvin McKinney",
        rating: 4.7,
        reviewsCount: 451444,
        price: 13.99,
        thumbnail: "/imges/course.png" // استبدلها بصور حقيقية
      },
      {
        id: "c5",
        title: "Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates",
        instructor: "Esther Howard",
        rating: 4.7,
        reviewsCount: 451444,
        price: 49.00,
        thumbnail: "/imges/course2.png"
      }
    ]
  },
  
];
export default function PurchaseHistoryPage() {
  return (
    <main className="min-h-screen ">
      <div className="">
        {/* المكون الذي بنيناه سابقاً */}
        <PurchaseHistory data={purchaseData} />
      </div>
    </main>
  );
}