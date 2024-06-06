
import Team from "@models/team.js";

export async function POST(req) {
  try {
    const { teamName, members } = await req.json();

    const team = new Team({ teamName, members });
    await team.save();

    return NextResponse.json({ message: 'Team created successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
