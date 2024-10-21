import { connectDB } from "@/app/lib/connectDB";
import { UserModal } from "@/app/lib/UserModal";

export async function GET() {
  await connectDB();
  const allUser = await UserModal.find();
  return Response.json(allUser)
}

export async function POST(request) {
  try {
    let newUser = await request.json();
    let obj = await new UserModal({
      fullName: newUser.fullName,
      email: newUser.email,
    });
    await obj.save();
    return Response.json(obj);
  } catch (error) {
    console.log(error);
  }
}
