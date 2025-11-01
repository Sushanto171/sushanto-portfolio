"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

// ✅ Validation Schema using Zod
const formSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(10, "Description is required"),
  thumbnail: z.string().url("Valid image URL required"),
  liveLink: z.string().url("Valid live URL required"),
  repoLink: z.string().url("Valid repository URL required"),
  features: z.array(z.string().min(2, "Feature cannot be empty")).optional(),
  // tags: z.array(z.string().min(1, "Tag cannot be empty")).optional(),
  // challenges: z.array(z.string().min(2, "Challenge cannot be empty")).optional(),
  // learned: z.array(z.string().min(2, "Learned point cannot be empty")).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddProjectForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: "",
      liveLink: "",
      repoLink: "",
      features: [""],
      // tags: [""],
      // challenges: [""],
      // learned: [""],
    },
  });

  // Dynamic fields (arrays)
  const { fields, append, remove } = useFieldArray<FormValues>({
    control: form.control,
    name: "features" as never,
  });

  // const tags = useFieldArray<FormValues>({
  //   control: form.control,
  //   name: "tags",
  // });
  // const challenges = useFieldArray<FormValues>({
  //   control: form.control,
  //   name: "challenges",
  // });
  // const learned = useFieldArray<FormValues>({
  //   control: form.control,
  //   name: "learned",
  // });

  const onSubmit = async (values: FormValues) => {
    console.log(values);
    // TODO: POST to API route (e.g. /api/projects)
  };

  // const renderDynamicFields = (
  //   fieldArray: ReturnType<typeof useFieldArray>,
  //   name: keyof FormValues,
  //   label: string
  // ) => (
  //   <div className="space-y-2">
  //     <FormLabel>{label}</FormLabel>
  //     {fieldArray.fields.map((field, index) => (
  //       <div key={field.id} className="flex gap-2 items-center">
  //         <FormField
  //           control={form.control}
  //           name={`${name}.${index}` as any}
  //           render={({ field }) => (
  //             <FormControl>
  //               <Input
  //                 {...field}
  //                 placeholder={`Enter ${label.toLowerCase()}...`}
  //               />
  //               <FormMessage className="text-red-500 text-xs" />
  //             </FormControl>
  //           )}
  //         />
  //         <Button
  //           type="button"
  //           size="icon"
  //           variant="destructive"
  //           onClick={() => fieldArray.remove(index)}
  //         >
  //           <Trash2 className="w-4 h-4" />
  //         </Button>
  //       </div>
  //     ))}
  //     <Button
  //       type="button"
  //       variant="outline"
  //       onClick={() => fieldArray.append("")}
  //       className="mt-2"
  //     >
  //       <Plus className="w-4 h-4 mr-2" /> Add {label}
  //     </Button>
  //   </div>
  // );

  return (
    <Card className="max-w-3xl mx-auto my-8 border shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Add New Project
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter project title" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter project description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            {/* Image, Links */}
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thumbnail URL</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://image.link"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="liveLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Live Link</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://yourapp.vercel.app"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="repoLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repository Link</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="https://github.com/username/repo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            {/* Dynamic Arrays */}
            {/* <div className="grid gap-6">
              <FormLabel>Features</FormLabel>
              {fields.map((field, index) => (
                <FormField
                  key={field.id}
                  control={form.control}
                  name={`${field}.${index}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="https://github.com/username/repo"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />
              ))}
              <Button type="button" onClick={()=>append("")}>Add</Button>
              {/* {renderDynamicFields(features, "features", "Feature")} */}
              {/* {renderDynamicFields(tags, "tags", "Tag")}
              {renderDynamicFields(challenges, "challenges", "Challenge")}
              {renderDynamicFields(learned, "learned", "Learned")}
            </div> 
               */}

            <Button type="submit" className="w-full mt-4">
              Save Project
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
