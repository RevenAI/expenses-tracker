import { Flex, Separator, Card, Stack, DataList, Icon } from "@chakra-ui/react"
import { FaRegClock, FaCartArrowDown } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
import { MdReportOff } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import useFetch from "../hooks/useFetch";
import { getEnvUrl } from "../utils/helpers";

const Home = () => {
  const apiUrl = getEnvUrl();
  const { data, loading, error } = useFetch(`${apiUrl}expenses/`);

  return (
    /* general home sections container */
    <Flex>
      {/* first section */}
      <Stack >
        {/* Pending Tasks List Card */}
        <Flex>
          <Card.Root maxW="sm">
            <Card.Header>
              <Card.Title>Pending Tasks</Card.Title>
              <Separator />
              <Card.Description>
                Pending...
              </Card.Description>
            </Card.Header>
            <Card.Body>
            <Separator />
            <DataList.Root size="sm" orientation="horizontal">
              <DataList.Item>
                <DataList.ItemLabel><Icon><FaRegClock /></Icon></DataList.ItemLabel>
                <DataList.ItemLabel>Pending Approvals</DataList.ItemLabel>
                <DataList.ItemValue>34</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel><Icon><IoMdAirplane /></Icon></DataList.ItemLabel>
                <DataList.ItemLabel>New Trips Registered</DataList.ItemLabel>
                <DataList.ItemValue>34</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel><Icon><MdReportOff /></Icon></DataList.ItemLabel>
                <DataList.ItemLabel>Unreported Expenses</DataList.ItemLabel>
                <DataList.ItemValue>34</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel><Icon><FaCartArrowDown /></Icon></DataList.ItemLabel>
                <DataList.ItemLabel>Upcoming Expenses</DataList.ItemLabel>
                <DataList.ItemValue>34</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel><Icon><TbCurrencyNaira /></Icon></DataList.ItemLabel>
                <DataList.ItemLabel>Unreported Advances</DataList.ItemLabel>
                <DataList.ItemValue>Naira 34</DataList.ItemValue>
              </DataList.Item>
            </DataList.Root>
            <Separator />
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              {/* make this no content */}
            </Card.Footer>
          </Card.Root>
        </Flex>

        {/* Recent Expences List Card */}
        <Flex>
  <div>
    {error && <h2>Error: {error}</h2>}
    {data && data.length > 0 ? (
      data.map((d) => (
        <div key={d.id}>
          <p>{d.category}</p>
          <p>{d.amount}</p>
          <p>{d.currency}</p>
          <p>{d.description}</p>
        </div>
      ))
    ) : (
      <h2>No Data Available</h2>
    )}
  </div>
</Flex>


      </Stack>
      
    </Flex>
  )
}

export default Home

