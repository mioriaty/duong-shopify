import { ResourcePicker } from "@shopify/app-bridge-react";
import { Checkbox, Page } from "@shopify/polaris";
import React, { useCallback, useState } from "react";

const Index = ({ data }) => {
  const [checked, setChecked] = useState(false);
  const [isOpened, setOpened] = useState(false);
  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);

  const handleSelection = (resources) => {
    const idResources = resources.selection.map((product) => product.id);
    setOpened(false);
    console.log(idResources);
  };

  console.log({ data });

  return (
    <Page
      title="Product selector"
      primaryAction={{
        content: "Select products",
        onAction: () => setOpened(true),
      }}
    >
      <Checkbox
        label="Basic checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <ResourcePicker
        resourceType="Product"
        open={isOpened}
        onCancel={() => setOpened(false)}
        onSelection={(resources) => handleSelection(resources)}
      />
    </Page>
  );
};

export async function getServerSideProps() {
  // fetch data from external API
  const products = await client.product.fetchAll();
  // pass data to the page via props
  return {
    props: {
      data: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default Index;
