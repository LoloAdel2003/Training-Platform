export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviewsCount: number;
  price: number;
  thumbnail: string;
}

export interface PurchaseRecord {
  id: string;
  date: string; // مثال: 1st September, 2021 at 11:30 PM
  totalCourses: number;
  totalAmount: number;
  paymentMethod: string;
  cardNumber: string; // لإظهار آخر 4 أرقام ****
  customerName: string;
  courses: Course[];
}