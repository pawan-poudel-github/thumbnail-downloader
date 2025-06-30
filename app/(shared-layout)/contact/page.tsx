import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: "Need help or have feedback? Get in touch with the ThumbnailSaver team—fast support."
}
const Page = () => {
    return (
        <div className="px-5 mx-auto max-w-2xl">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Contact Us
                </h1>
                <p className="mx-auto leading-relaxed text-base">
                    Have questions or need assistance? Feel free to reach out to us using the form below.
                </p>
            </div>
            <form className=" mx-auto" method="POST" action="https://api.web3forms.com/submit">
                <input type="hidden" name="access_key" value={"fc665be8-04ad-4293-83d6-6b252e4cc418"} />
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <Label htmlFor="name">
                                Name
                            </Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <Label htmlFor="email">
                                Email
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                            <Label
                                htmlFor="message"
                            >
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                required
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <Button className="bg-theme cursor-pointer text-primary-foreground bg-primary hover:opacity-90 disabled:opacity-80">
                            Send Message
                        </Button>
                    </div>

                </div>
            </form>
        </div>

    )
}
export default Page