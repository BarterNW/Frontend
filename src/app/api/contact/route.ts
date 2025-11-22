import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Add timestamp to the submission
    const submission = {
      ...data,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };

    // Path to the JSON file
    const filePath = path.join(process.cwd(), 'contact-submissions.json');
    
    let submissions = [];
    
    // Read existing submissions if file exists
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      submissions = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist yet, start with empty array
      submissions = [];
    }
    
    // Add new submission
    submissions.push(submission);
    
    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully!' 
    });
    
  } catch (error) {
    console.error('Error saving contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
