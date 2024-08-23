import Announcements from "@/Components/Announcements.jsx";

export default function Welcome() {
    return (
        <>
            <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <main className="mt-6">
                        <Announcements />
                    </main>
                </div>
            </div>
        </>
    );
}
