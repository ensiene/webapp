import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const admin = await prisma.user.upsert({
		where: { email: "admin@codersteps.com" },
		update: {},
		create: {
			email: "admin@codersteps.com",
			name: "Admin",
		},
	});

	console.log("Admin name:", admin.name);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
