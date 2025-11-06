import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Entity from '../models/Entity.js';
import Admin from '../models/Admin.js';
import { entities, admin } from './data.js';

// Load environment variables
dotenv.config();

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sameh:sameh@cluster0.f1armn5.mongodb.net/teachers-care');
    console.log('Connected to MongoDB');

    // Clear existing data
    console.log('Clearing existing data...');
    await Entity.deleteMany({});
    await Admin.deleteMany({});
    console.log('Existing data cleared');

    // Seed entities
    console.log('Seeding entities...');
    const createdEntities = await Entity.insertMany(entities);
    console.log(`${createdEntities.length} entities seeded successfully`);

    // Seed admin user
    console.log('Creating admin user...');
    const adminUser = new Admin(admin);
    await adminUser.save();
    console.log('Admin user created successfully');
    console.log(`Username: ${admin.username}`);
    console.log(`Password: ${admin.password}`);

    // Display summary
    console.log('\n=== Seed Summary ===');
    const stats = await Entity.aggregate([
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 }
        }
      }
    ]);
    
    stats.forEach(stat => {
      console.log(`${stat._id}: ${stat.count}`);
    });

    console.log('\nDatabase seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
