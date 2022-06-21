// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "./types";
import * as utilities from "./utilities";

/**
 * This represents a web app component resource
 */
export class Webapp extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'azure-justrun:index:webapp';

    /**
     * Returns true if the given object is an instance of Webapp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Webapp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Webapp.__pulumiType;
    }

    /**
     * The URL of the web app
     */
    public /*out*/ readonly url!: pulumi.Output<string | undefined>;

    /**
     * Create a Webapp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WebappArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["appSkuName"] = (args ? args.appSkuName : undefined) ?? "Basic";
            resourceInputs["appSkuTier"] = (args ? args.appSkuTier : undefined) ?? "B1";
            resourceInputs["containerPublicAccess"] = args ? args.containerPublicAccess : undefined;
            resourceInputs["filePath"] = (args ? args.filePath : undefined) ?? "./www";
            resourceInputs["namePrefix"] = args ? args.namePrefix : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            resourceInputs["storageSkuName"] = args ? args.storageSkuName : undefined;
            resourceInputs["url"] = undefined /*out*/;
        } else {
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Webapp.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a Webapp resource.
 */
export interface WebappArgs {
    /**
     * The tier of the compute instance running the server. Also see appSkuName
     */
    appSkuName?: pulumi.Input<string>;
    /**
     * The name of the compute instance running the server. Also see appSkuTier
     */
    appSkuTier?: pulumi.Input<string>;
    /**
     * The public access level of the BlobContainer containg the website data.
     */
    containerPublicAccess?: pulumi.Input<enums.PublicAccess>;
    /**
     * The relative file path to the folder containing web files.
     */
    filePath?: pulumi.Input<string>;
    /**
     * The name prefix given to child resources of this component. Should not contain dashes.
     */
    namePrefix?: pulumi.Input<string>;
    /**
     * The resource group to use. One will be created if not provided.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the storage account to use. One will be created if not provided.
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * The SKU name of the storage account created, if storageAccount is not provided
     */
    storageSkuName?: pulumi.Input<enums.SkuName>;
}
