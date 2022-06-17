// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

import * as pulumiAzureNative from "@pulumi/azure-native";

export class Containerapp extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'azure-justrun:index:containerapp';

    /**
     * Returns true if the given object is an instance of Containerapp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Containerapp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Containerapp.__pulumiType;
    }

    public /*out*/ readonly url!: pulumi.Output<string | undefined>;

    /**
     * Create a Containerapp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ContainerappArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["dockerImageName"] = args ? args.dockerImageName : undefined;
            resourceInputs["imageDirectory"] = args ? args.imageDirectory : undefined;
            resourceInputs["namePrefix"] = args ? args.namePrefix : undefined;
            resourceInputs["registry"] = args ? args.registry : undefined;
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["url"] = undefined /*out*/;
        } else {
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Containerapp.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a Containerapp resource.
 */
export interface ContainerappArgs {
    /**
     * The name of the docker image to use. Required. Either this or imageDirectory must be provided. A docker image will be created if this is not provided.
     */
    dockerImageName?: pulumi.Input<string>;
    /**
     * The relative directory path to the folder containing the docker image. Either this or dockerImageName must be provided.
     */
    imageDirectory?: pulumi.Input<string>;
    /**
     * The name prefix given to child resources of this component. Should not contain dashes.
     */
    namePrefix?: pulumi.Input<string>;
    /**
     * The container registry to use. One will be created if not provided.
     */
    registry?: pulumi.Input<pulumiAzureNative.containerregistry.Registry>;
    /**
     * The resource group to use. One will be created if not provided.
     */
    resourceGroup?: pulumi.Input<pulumiAzureNative.resources.ResourceGroup>;
    /**
     * The version of the docker image created, if not provided
     */
    version?: pulumi.Input<string>;
}
