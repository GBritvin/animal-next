import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group,
} from "@mantine/core";
import { match } from "assert";

// interface StatsRingProps {
//   data: {
//     stats: string;
//     color: string;
//   }[];
// }

export default function StatsRing({ data }: any) {
  console.log(data);

  return (
    <Paper withBorder radius="md" p="xs" key={data}>
      <Center>
        <Group>
          <div>
            <Text weight={700}>{data}</Text>
          </div>
          <RingProgress
            size={40}
            roundCaps
            thickness={4}
            sections={[
              { value: Math.floor(Math.random() * 100), color: "teal" },
            ]}
          />
        </Group>
      </Center>
    </Paper>
  );
}
