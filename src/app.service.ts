import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      success: true,
      statusCode: 200,
      message: 'Hello World!',
      data: {
        name: 'NestJS API',
        version: '1.0.0',
      },
    };
  }
  getUsers() {
    const users = [
      {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul.sharma@example.com",
        age: 28,
        city: "Hyderabad",
        status: "active"
      },
      {
        id: 2,
        name: "Priya Verma",
        email: "priya.verma@example.com",
        age: 25,
        city: "Pune",
        status: "active"
      },
      {
        id: 3,
        name: "Amit Kumar",
        email: "amit.kumar@example.com",
        age: 32,
        city: "Delhi",
        status: "inactive"
      },
      {
        id: 4,
        name: "Neha Singh",
        email: "neha.singh@example.com",
        age: 27,
        city: "Mumbai",
        status: "active"
      },
      {
        id: 5,
        name: "Rohit Patel",
        email: "rohit.patel@example.com",
        age: 35,
        city: "Ahmedabad",
        status: "active"
      },
      {
        id: 6,
        name: "Anjali Gupta",
        email: "anjali.gupta@example.com",
        age: 29,
        city: "Bangalore",
        status: "inactive"
      },
      {
        id: 7,
        name: "Vikas Yadav",
        email: "vikas.yadav@example.com",
        age: 31,
        city: "Jaipur",
        status: "active"
      },
      {
        id: 8,
        name: "Sneha Reddy",
        email: "sneha.reddy@example.com",
        age: 26,
        city: "Hyderabad",
        status: "active"
      },
      {
        id: 9,
        name: "Arjun Mehta",
        email: "arjun.mehta@example.com",
        age: 34,
        city: "Chennai",
        status: "inactive"
      },
      {
        id: 10,
        name: "Kavya Nair",
        email: "kavya.nair@example.com",
        age: 24,
        city: "Kochi",
        status: "active"
      }
    ];
    return {
      success: true,
      statusCode: 200,
      message: 'User list fetched successfully!',
      data:users,
    };
  }
}
