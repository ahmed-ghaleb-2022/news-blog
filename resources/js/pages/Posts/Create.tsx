import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { index, store } from '@/routes/posts';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon, Dot} from "lucide-react"
import TextEditor from '@/components/TextEditor';


const breadcrumbs: BreadcrumbItem[] = [
     {
            title: 'All posts',
            href: index().url,
        },
        {
            title: 'create post',
            href: '#',
        },
];

export default function Create() {


    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
    });

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(store().url);
    };

     

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="create post" />
            <div className="m-4">
                <h3 className="mb-7 text-2xl">create post</h3>
                <form onSubmit={submitHandler} className="flex flex-col gap-4">
                    {/* wenn eine error vorhanden ist */}
                    {Object.keys(errors).length > 0 && (
                        <Alert variant="destructive">
                            <AlertCircleIcon />
                            <AlertTitle>Errors !</AlertTitle>
                            <AlertDescription>
                                <ul>
                                    {Object.entries(errors).map(([key, value]) => (
                                    <li key={key}> <Dot className='inline'/>{value as string}</li>
                                    ))}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}

                    <div>
                        <Label className="text-lg">Title</Label>
                        <Input type="text" name="title" value={data.title} onChange={(e) => setData('title', e.target.value)} />
                    </div>
                    <div>
                        <Label className="text-lg">Content</Label>
                        <TextEditor onTextChange={(value) => setData('content', value)}/>
                    </div>
                    <div>
                        <Button className="mt-4 hover:cursor-pointer" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
