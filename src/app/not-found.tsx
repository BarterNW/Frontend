import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-[#061C47]">COMING SOON !!</h1>
          <p className="mb-8 text-2xl text-gray-600">Stay Tuned!</p>
          <Button href="/" variant="primary">
            Return to Home
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}


