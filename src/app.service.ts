import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 20px;">
        <h1>Welcome to the Possinove Inventory Management System API</h1>
        <p>This API allows you to manage inventory efficiently. Explore the available endpoints and features to streamline your operations.</p>
        <p>For full API documentation, visit <a href="/api/docs" style="color: blue; text-decoration: underline;">API Documentation</a>.</p>
      </div>
    `;
  }
}
