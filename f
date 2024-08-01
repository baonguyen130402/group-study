import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function CourseCard(props: any) {
  const { header, description, thumbnail, content, type } = props;
  return (
    <Card className="flex flex-col space-y-3">
      <img
        src={thumbnail}
        className={clsx("rounded-xl", {
          "h-[250px] w-full " : type === "banner"
        })}
      />
      <CardHeader>
        <CardTitle>
          {header}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-md font-semibold">{content}</span>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Registry</Button>
      </CardFooter>
    </Card>
  );
}