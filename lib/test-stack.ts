import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import { PythonFunction } from '@aws-cdk/aws-lambda-python-alpha';


export class TestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const entry = 'src'
    new PythonFunction(this, 'TestFunction', {
      functionName: "testFunction",
      runtime: lambda.Runtime.PYTHON_3_12,
      entry,
      index: 'index.py',
      handler: 'handler',
      bundling: {
        assetExcludes: ['.venv'],
      },
    });
  }
}
