import { AlertCircle } from "lucide-react";

const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-lg w-full space-y-6 text-center bg-card p-8 rounded-lg shadow-lg border border-border">
        <div className="flex justify-center">
          <AlertCircle className="h-20 w-20 text-red-500" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Website Temporarily Unavailable
        </h1>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            We regret to inform you that this website has been temporarily suspended due to unpaid dues.
          </p>
          <p>
            The website will be restored once the outstanding payment has been processed.
          </p>
        </div>
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground mt-4">
            We apologize for any inconvenience this may have caused.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
