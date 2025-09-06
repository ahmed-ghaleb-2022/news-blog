import AppLayout from '@/layouts/app-layout';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { index, update } from '@/routes/posts';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon, Dot} from "lucide-react"

const breadcrumbs: BreadcrumbItem[] = [
     {
            title: 'All posts',
            href: index().url,
        },
        {
            title: 'Edit post',
            href: '#',
        },
];

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
}

export default function Create({ post  }: { post: Post }) {
    const { data, setData, put, processing, errors } = useForm({
        title: post.title,
        content: post.content,
    });

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(update(post.id).url);
    };

    console.log(post);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="edit post" />
            <div className="m-4">
                <h3 className="mb-7 text-2xl">edit post</h3>
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
                        <Textarea name="content" onChange={(e) => setData('content', e.target.value)}>
                            {data.content}
                        </Textarea>
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
